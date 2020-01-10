import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RelayContext from "./common/relay/RelayContext";
import RelayEnvironment from "./common/relay/RelayEnvironment";

ReactDOM.render(
    <RelayContext.Provider value={RelayEnvironment}>
        <App />
    </RelayContext.Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
