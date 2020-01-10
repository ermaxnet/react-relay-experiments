import React from "react";
import { usePreloadedQuery, preloadQuery } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";
import RelayEnvironment from "./common/relay/RelayEnvironment";
import User from "./components/User";
import AppQuery, { AppQuery as R } from "./__generated__/AppQuery.graphql";

const preloadedQuery = preloadQuery<R>(
    RelayEnvironment,
    AppQuery,
    {},
    { fetchPolicy: "store-or-network" }
);

const App: React.FC = () => {
    const { viewer } = usePreloadedQuery<R>(
        graphql`
            query AppQuery {
                viewer {
                    ...User_user,
                    ...UserAvatar_user
                }
            }
        `,
        preloadedQuery
    );

    return (
        <User user={viewer} />
    );
};

export default App;
