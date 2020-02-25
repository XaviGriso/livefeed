import React from 'react';
import FeedPanel from './Components/Feed/index';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

function App() {
	return (
		<ApolloProvider client={client}>
			<FeedPanel />
		</ApolloProvider>
	);
}

export default App;
