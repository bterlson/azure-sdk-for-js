// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates handling Web PubSub CloudEvents with Express
 */

import { WebPubSubEventHandler } from "@azure/web-pubsub-express";
import express from "express";

const handler = new WebPubSubEventHandler("chat", ["https://xxx.webpubsub.azure.com"], {
  dumpRequest: false,
  handleConnect(connectRequest) {
    console.log(JSON.stringify(connectRequest));
  },
  onConnected(connectedRequest) {
    console.log(JSON.stringify(connectedRequest));
  },
  handleUserEvent(req, res) {
    console.log(JSON.stringify(req));
    res.success();
  }
});

const app = express();

app.use(handler.getMiddleware());

app.listen(3000, () =>
  console.log(`Azure WebPubSub Upstream ready at http://localhost:3000${handler.path}`)
);
