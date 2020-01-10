import React from "react";
import { useFragment } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";

const UserAvatar = (props: any) => {
    const {
        name = "N/A",
        avatarUrl = null
    } = useFragment(
        graphql`
            fragment UserAvatar_user on User {
                name,
                avatarUrl
            }
        `,
        props.user
    );

    return (
        <img alt={name} src={avatarUrl} />
    );
};

export default UserAvatar;
