/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserAvatar_user = {
    readonly name: string | null;
    readonly avatarUrl: unknown;
    readonly " $refType": "UserAvatar_user";
};
export type UserAvatar_user$data = UserAvatar_user;
export type UserAvatar_user$key = {
    readonly " $data"?: UserAvatar_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserAvatar_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserAvatar_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "avatarUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'c4addaa24f7038d3a521d8d15ac44aab';
export default node;
