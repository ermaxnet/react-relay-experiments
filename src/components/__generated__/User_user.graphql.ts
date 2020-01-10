/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type User_user = {
    readonly id: string;
    readonly name: string | null;
    readonly email: string;
    readonly " $refType": "User_user";
};
export type User_user$data = User_user;
export type User_user$key = {
    readonly " $data"?: User_user$data;
    readonly " $fragmentRefs": FragmentRefs<"User_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "User_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
(node as any).hash = '0dffd6d2f560ed71f76438a37e1af00e';
export default node;
