/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const CheckNameAvailabilityInput: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityInput",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityInput",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: "type",
        defaultValue: 'searchServices',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityOutput: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityOutput",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityOutput",
    modelProperties: {
      isNameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdminKeyResult: msRest.CompositeMapper = {
  serializedName: "AdminKeyResult",
  type: {
    name: "Composite",
    className: "AdminKeyResult",
    modelProperties: {
      primaryKey: {
        readOnly: true,
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryKey: msRest.CompositeMapper = {
  serializedName: "QueryKey",
  type: {
    name: "Composite",
    className: "QueryKey",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      key: {
        readOnly: true,
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Enum",
          allowedValues: [
            "free",
            "basic",
            "standard",
            "standard2",
            "standard3",
            "storage_optimized_l1",
            "storage_optimized_l2"
          ]
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const SearchService: msRest.CompositeMapper = {
  serializedName: "SearchService",
  type: {
    name: "Composite",
    className: "SearchService",
    modelProperties: {
      ...Resource.type.modelProperties,
      replicaCount: {
        serializedName: "properties.replicaCount",
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 12,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      partitionCount: {
        serializedName: "properties.partitionCount",
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 12,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      hostingMode: {
        serializedName: "properties.hostingMode",
        defaultValue: 'default',
        type: {
          name: "Enum",
          allowedValues: [
            "default",
            "highDensity"
          ]
        }
      },
      status: {
        readOnly: true,
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "running",
            "provisioning",
            "deleting",
            "degraded",
            "disabled",
            "error"
          ]
        }
      },
      statusDetails: {
        readOnly: true,
        serializedName: "properties.statusDetails",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "succeeded",
            "provisioning",
            "failed"
          ]
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "SystemAssigned"
          ]
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        readOnly: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const SearchManagementRequestOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchManagementRequestOptions",
    modelProperties: {
      clientRequestId: {
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const ListQueryKeysResult: msRest.CompositeMapper = {
  serializedName: "ListQueryKeysResult",
  type: {
    name: "Composite",
    className: "ListQueryKeysResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryKey"
            }
          }
        }
      }
    }
  }
};

export const SearchServiceListResult: msRest.CompositeMapper = {
  serializedName: "SearchServiceListResult",
  type: {
    name: "Composite",
    className: "SearchServiceListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchService"
            }
          }
        }
      }
    }
  }
};
