import matter from 'gray-matter';

export interface Author {
    name: string;
    picture: string;
}

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
}

export interface BlogPost {
    [key: string]: string | Array<string>;
}

export interface BlogApi {
    getRawArticleByPostId: (postId: string) => matter.GrayMatterFile<string>;
    getAllArticles: () => void
    getPostInformation: () => void
}
