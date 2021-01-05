import { config } from '../api/blog';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BlogPost from 'src/components/BlogPost';
// import Time from '../../posts/2020/time.md';
import { Config, fetchApi } from 'src/utilities/fetchApi';
import { getAllArticles, getRawArticleByPostId } from 'src/lib/blog';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

const fetcher = async (query, postId) => {
	const apiUrl = '/api/blog';
	const payloads: Config = { method: 'POST',
		headers: { 'Content-type': 'application/json' },
		data: JSON.stringify({ query,
			variables: { postId } }) };
	try {
		const result = await fetchApi<{data:string}>({ apiUrl,
			payloads });
		return result.data;
	} catch (error) {
		console.log({ error });
	}
};

// https://nextjs.org/docs/routing/dynamic-routes
const Post = ({ source }) => {
	const contents = hydrate(source);
	const router = useRouter();
	const { postId } = router.query;
	const [content, setContent] = useState('');
	// useEffect(() => {
	// 	if (postId) {
	// 		(async () => {
	// 			const { blog } = await fetcher('query Blog($postId: String!){ blog(postId:$postId ) { content } }', postId);
	// 			setContent(blog);
	// 		})();
	// 	}
	// }, [postId]);

	return (
		<BlogPost content={contents} />
	);
};

export async function getStaticProps({ params }) {
	const { postId } = params;
	const { content } = await getRawArticleByPostId(postId);
	const mdxSource = await renderToString(content);

	return { props: { source: mdxSource } };
}
export async function getStaticPaths() {
	const allPostName = getAllArticles();
	return { paths: allPostName.map((postId) => ({ params: { postId } })),
		fallback: false };
}

export default Post;
