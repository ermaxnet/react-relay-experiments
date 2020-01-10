import React from "react";
import { Environment } from "relay-runtime";

const RelayContext = React.createContext<Environment>(null as any);
RelayContext.displayName = "RelayContext";

export default RelayContext;
