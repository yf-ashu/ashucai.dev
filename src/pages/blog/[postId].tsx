import Article from '../../components/blog/Article';
import { getAllArticles, getRawArticleByPostId, test2 } from '../../api/blog';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
// import remarkFrontmatter from 'remark-frontmatter';
// import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';

const ArticleRouter = ({ source }: { source: any }) => <Article source={source} />;

// function transformer(ast) {
// 	// slugs.reset();
// 	console.log({ ast });
// 	// visit(ast, 'heading', visitor);
//
// 	function visitor(node) {
// 		const data = node.data || (node.data = {});
// 		const props = data.hProperties || (data.hProperties = {});
// 		let { id } = props;
//
// 		id = id ? slugs.slug(id, true) : slugs.slug(toString(node));
//
// 		data.id = id;
// 		props.id = id;
// 	}
// }
function slug2(ast: any) {
    console.log({ ast });
}
export async function getStaticProps({ params }: { params: { postId: string } }) {
    const { postId } = params;

    const { content } = await getRawArticleByPostId(postId);

    const text = await test2();

    const mdxSource = await serialize(text, {
        // parseFrontmatter: true,
    });
    // #FCD320
    console.log({ mdxSource });
    return { props: { source: mdxSource } };
}
export async function getStaticPaths() {
    const allPostName = getAllArticles();

    return {
        paths: allPostName.map((postId) => ({ params: { postId } })),
        fallback: false,
    };
}

export default ArticleRouter;
