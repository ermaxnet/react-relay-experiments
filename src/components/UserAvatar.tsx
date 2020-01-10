import React from "react";
import { createFragmentContainer, RelayProp } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { UserAvatar_user } from "./__generated__/UserAvatar_user.graphql";

interface UserAvatarProps {
    relay: RelayProp,
    user: UserAvatar_user
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
    const {
        name = "N/A",
        avatarUrl = null
    } = props.user as any;

    return (
        <img alt={name} src={avatarUrl} />
    );
};

export default createFragmentContainer(UserAvatar, {
    user: graphql`
        fragment UserAvatar_user on User {
            name,
            avatarUrl
        }
    `
});