# LIVEFEED CLIENT

## Intro

This simple React client, connects to a websocket so that every time a specific message is created via the [livefeed-api](https://github.com/XaviGriso/livefeed-api) it gets automatically displayed in the component without having to reload the page.

## Websocket setup

We can easily setup the websocket via the Apollo client in `apollo.ts`:

```
const wsLink = new WebSocketLink({
	uri: `ws://localhost:4000/graphql`,
	options: {
		reconnect: true
	}
});
```

and using the ability to split links, we can send data to each link depending on what kind of operation is being sent.
This is defined in the `split` function.

## Feed panel

Apollo exposes a hook to get data from a subscription: `useSubscription`.
Using that, we can create a custom hook `useLiveFeed` that leverages the `useSubscription` hook and connects it to the subscription we defined in the API.

The UI component at this point can simply wait for data from the hook:

```
const { data, loading, error } = useLiveFeed();
```

and display the UI accordingly.
Each `data` will correspond to a `PostSubscriptionPayload`.
