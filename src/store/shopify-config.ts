import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
export const client = Client.buildClient({
  domain: "puppyous.myshopify.com",
  storefrontAccessToken: "4f11e78f0cbab51840fc3171850826f3",
});
