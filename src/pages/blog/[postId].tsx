import React from 'react';
import BlogPost from 'src/components/BlogPost';
import { getAllArticles, getRawArticleByPostId } from 'src/lib/blog';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import slug from 'remark-slug';
// import link from `remark-autolink-headings`
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
function transformer(ast) {
	// slugs.reset();
	console.log({ ast });
	// visit(ast, 'heading', visitor);

	function visitor(node) {
		const data = node.data || (node.data = {});
		const props = data.hProperties || (data.hProperties = {});
		let { id } = props;

		id = id ? slugs.slug(id, true) : slugs.slug(toString(node));

		data.id = id;
		props.id = id;
	}
}
function slug2(ast) {
	console.log({ ast });

	// return transformer;
}
export async function getStaticProps({ params }:{params:{postId:string}}) {
	const { postId } = params;
	const { content } = await getRawArticleByPostId(postId);
	const mdxSource = await renderToString(content, { mdxOptions: { remarkPlugins: [slug2] } });

	return { props: { source: mdxSource } };
}
export async function getStaticPaths() {
	const allPostName = getAllArticles();
	return { paths: allPostName.map((postId) => ({ params: { postId } })),
		fallback: false };
}

export default Post;
