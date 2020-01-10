import React from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import RelayContext from "./common/relay/RelayContext";
import User from "./components/User";
import { AppQuery as R } from "./__generated__/AppQuery.graphql";

class TypedQueryRenderer extends QueryRenderer<R> {}

const App: React.FC = () => {
    return (
        <RelayContext.Consumer>
            {(modernEnvironment) => {
                return (
                    <TypedQueryRenderer
                        environment={modernEnvironment}
                        query={graphql`
                            query AppQuery {
                                viewer {
                                    ...User_user
                                }
                            }
                        `}
                        variables={{}}
                        render={({error, props}) => {
                            if (error) {
                                console.error(error);
                                return <div>Error: {error.message}</div>;
                            }

                            if (!props) {
                                return <div>Loading...</div>;
                            }

                            return <User user={props.viewer} />;
                        }}
                    />
                );
            }}
        </RelayContext.Consumer>
    );
}

export default App;
