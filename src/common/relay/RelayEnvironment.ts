import {
    Environment,
    Network,
    RecordSource,
    Store,
    FetchFunction
} from "relay-runtime";

const fetchRelay: FetchFunction = async (params, variables, _cacheConfig) => {
    const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
    
    if (!REACT_APP_GITHUB_AUTH_TOKEN) {
        throw new Error(
            'This app requires a GitHub authentication token to be configured.'
        );
    }

    const response = await fetch('https://api.github.com/graphql', {
        method: "POST",
        headers: {
            Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: params.text,
            variables
        })
    });

    const json = await response.json();

    if (Array.isArray(json.errors)) {
        throw new Error(
            `Error fetching GraphQL query '${
                params.name
            }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
                json.errors
            )}`
        );
    }

    return json;
}

const gcScheduler = {
    gcReleaseBufferSize: 10
} as any;

const RelayEnvironment = new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource(), gcScheduler)
});

export default RelayEnvironment;
