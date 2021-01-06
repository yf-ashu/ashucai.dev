import React from 'react';
import BlogPost from 'src/components/BlogPost';
import { getAllArticles, getRawArticleByPostId } from 'src/lib/blog';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

// const fetcher = async (query, postId) => {
// 	const apiUrl = '/api/blog';
// 	const payloads: Config = { method: 'POST',
// 		headers: { 'Content-type': 'application/json' },
// 		data: JSON.stringify({ query,
// 			variables: { postId } }) };
// 	try {
// 		const result = await fetchApi<{data:string}>({ apiUrl,
// 			payloads });
// 		return result.data;
// 	} catch (error) {
// 		console.log({ error });
// 	}
// };

// https://nextjs.org/docs/routing/dynamic-routes
const Post = ({ source }:{source:string}) => {
	const contents = hydrate(source);

	return (
		<BlogPost content={contents} />
	);
};

export async function getStaticProps({ params }:{params:{postId:string}}) {
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
