import { ApolloServer, gql } from 'apollo-server-micro';
import { getRawArticleByPostId } from 'src/lib/blog';

const typeDefs = gql`
  type Query{
	  blog(postId: String!) :Blog!
	}
  type Blog{
	 frontMatter:BlogFrontMatter!,
	 content:String
 }
  type BlogFrontMatter {
	title: String!,
	summary: String,
	tags: [String],
	createTime:String!,
}

`;
const resolvers = { Query: { blog: async (parent, { postId }, context) => {
	const { content } = await getRawArticleByPostId(postId);
	return { content };
} },

Blog: { frontMatter: async (parent, { postId }, context) => {
	const test2 = await getRawArticleByPostId(postId);
	return 	{ title: '2' };
} },

BlogFrontMatter: { frontMatter: async (parent, { postId }, context) => {
	const test2 = await getRawArticleByPostId(postId);
	return 	{ title: '3' };
} } };

const apolloServer = new ApolloServer({ typeDefs,
	resolvers });

export const config = { api: { bodyParser: false } };

export default apolloServer.createHandler({ path: '/api/blog' });
