// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates handling Web PubSub CloudEvents with Express
 */

import { WebPubSubEventHandler } from "@azure/web-pubsub-express";
import express from "express";

const handler = new WebPubSubEventHandler("chat", ["http://localhost:8080"], {
  dumpRequest: false,
  async handleConnect(connectRequest) {
    console.log(JSON.stringify(connectRequest));
  },
  async onConnected(connectedRequest) {
    console.log(JSON.stringify(connectedRequest));
  },
  async handleUserEvent(req, res) {
    console.log(JSON.stringify(req));
    /*
    // TODO: Needs update
    res.success({
      payload: {
        data: "Hey " + req.payload.data,
        dataType: req.payload.dataType
      }
    });
    */
  }
});

const app = express();

app.use(handler.getMiddleware());

app.listen(3000, () =>
  console.log(`Azure WebPubSub Upstream ready at http://localhost:3000${handler.path}`)
);
