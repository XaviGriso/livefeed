import React from 'react';
import useLiveFeed, { SubscriptionData } from '../../Hooks/useLiveFeed';
import { FeedBody, PostsWrapper, Post } from './FeedUI';

let livefeed: SubscriptionData[] = [];
const Loading = () => <div>...waiting for posts...</div>;
const Error = () => <div>Error!</div>;

const FeedPanel = () => {
	const { data, loading, error } = useLiveFeed();

	if (loading) {
		return <Loading />;
	}

	if (error || !data) {
		return <Error />;
	}

	if (data) {
		livefeed = [...livefeed, data];
	}

	return (
		<FeedBody>
			<PostsWrapper>
				{livefeed.map(({ post: { node: { author, content, id } } }) => (
					<Post key={id}>
						<b>{author}: </b>
						<br />
						<span>{content}</span>
					</Post>
				))}
			</PostsWrapper>
		</FeedBody>
	);
};

export default FeedPanel;
