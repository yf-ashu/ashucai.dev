import { getRawArticleByPostId } from '../../../lib/blog';
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
    type Query {
        blog(postId: String!): Blog!
    }
    type Blog {
        frontMatter: BlogFrontMatter!
        content: String
    }
    type BlogFrontMatter {
        title: String!
        summary: String
        tags: [String]
        createTime: String!
    }
`;
const resolvers = {
    Query: {
        blog: async (parent: any, { postId }: { postId: string }, context: any) => {
            const { content } = await getRawArticleByPostId(postId);
            return { content };
        },
    },

    Blog: { frontMatter: async (parent: any, { postId }: { postId: string }, context: any) => ({ title: '2' }) },

    BlogFrontMatter: {
        frontMatter: async (parent: any, { postId }: { postId: string }, context: any) => {
            const test2 = await getRawArticleByPostId(postId);
            return { title: '3' };
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = { api: { bodyParser: false } };

export default apolloServer.createHandler({ path: '/api/blog' });
