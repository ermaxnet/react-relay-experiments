import React, { Fragment } from "react";
import { createFragmentContainer, RelayProp } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import UserAvatar from "./UserAvatar";
import { User_user } from "./__generated__/User_user.graphql";

interface UserProps {
    relay: RelayProp,
    user: User_user
}

const User: React.FC<UserProps> = (props) => {
    return (
        <Fragment>
            <div>{props.user.name}</div>
            <UserAvatar user={props.user} />
        </Fragment>
    );
};

export default createFragmentContainer(User, {
    user: graphql`
        fragment User_user on User {
            id
            name,
            ...UserAvatar_user
        }
    `
});