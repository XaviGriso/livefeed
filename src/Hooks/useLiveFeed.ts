import gql from 'graphql-tag';
import { useSubscription } from 'react-apollo';

export type SubscriptionData = {
	post: {
		node: {
			content: string;
			id: string;
			author: string;
		};
	};
};

const useLiveFeed = () => {
	const NEW_POST_SUBSCRIPTION = gql`
		subscription PostSubscription {
			post {
				node {
					content
					id
					author
				}
			}
		}
	`;

	const { data, loading, error } = useSubscription<SubscriptionData>(
		NEW_POST_SUBSCRIPTION
	);

	return { data, loading, error };
};

export default useLiveFeed;
