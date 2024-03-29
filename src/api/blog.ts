import glob from 'glob';
import matter, { GrayMatterFile } from 'gray-matter';
import { join } from 'path';

export const getRawArticleByPostId = (postId: string): GrayMatterFile<string> => {
    const files = glob.sync(`src/posts/**/${postId}/index.md`, {});
    const postsDirectory = join(process.cwd(), files[0]);
    const fileContents = matter.read(postsDirectory);
    // const fileContents = matter(fs.readFileSync(postsDirectory, 'utf8'));
    return fileContents;
};
// TODO: 文章要根據時間排序
export const getAllArticles = () => {
    const all = glob.sync('src/posts/**/*.md', {}).map(
        (item) =>
            item
                .replace(/\/index.md$/, '')
                .split('/')
                .slice(-1)[0]
    );
    return all;
};
export const getArticleInformation = () => {
    const allPost = getAllArticles();
    return allPost.map((item) => {
        const article = getRawArticleByPostId(item);
        const sortTags = article.data?.tags.length > 0 ? article.data.tags.sort() : [];
        return { ...article.data, tags: sortTags, postId: item };
    });
};
