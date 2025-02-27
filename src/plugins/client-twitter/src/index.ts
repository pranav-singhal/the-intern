import { TwitterClientInterface } from "./client.ts";

const twitterPlugin = {
    name: "twitter",
    description: "Twitter client",
    clients: [TwitterClientInterface],
};
export default twitterPlugin;
