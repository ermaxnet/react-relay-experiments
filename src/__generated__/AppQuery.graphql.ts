/* tslint:disable */
/* eslint-disable */
/* @relayHash 4536206f71562a89e511dbea79a1eef8 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"User_user" | "UserAvatar_user">;
    };
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  viewer {
    ...User_user
    ...UserAvatar_user
    id
  }
}

fragment UserAvatar_user on User {
  name
  avatarUrl
}

fragment User_user on User {
  id
  name
  email
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "User_user",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserAvatar_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "avatarUrl",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  viewer {\n    ...User_user\n    ...UserAvatar_user\n    id\n  }\n}\n\nfragment UserAvatar_user on User {\n  name\n  avatarUrl\n}\n\nfragment User_user on User {\n  id\n  name\n  email\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '911fdd2dfc22bd82dd6936e4d7f1ea65';
export default node;
