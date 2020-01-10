import React, { Fragment } from "react";
import { useFragment } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";
import UserAvatar from "./UserAvatar";

const User = (props: any) => {
    const {
        name,
        email
    } = useFragment(
        graphql`
            fragment User_user on User {
                id,
                name,
                email
            }
        `,
        props.user
    );

    return (
        <Fragment>
            <a href={`mailto:${email}`}>{name}</a>
            <UserAvatar user={props.user} />
        </Fragment>
    );
};

export default User;
