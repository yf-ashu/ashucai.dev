import { getArticleInformation } from '../../lib/blog';
import NextLink from 'next/link';
import React from 'react';

import { NextSeo } from 'next-seo';

import { Box,
	Container,
	Flex,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Tag,
	Text } from '@chakra-ui/react';

const Blog = ({ frontMatter = [] }) => {
	console.log({ frontMatter });

	return (
		<>
			<NextSeo />
			<Container
				as="main"
				justifyContent="center"
				alignItems="flex-start"
				m="0 auto 4rem auto"
				maxWidth="700px"
			>
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Heading letterSpacing="tight" mb={2} as="h1" size="2xl">

						Blog
					</Heading>

					{/* <InputGroup my={4} mr={4} w="100%">
						<Input
							aria-label="Search articles"
							//   onChange={(e) => setSearchValue(e.target.value)}
							placeholder="Search articles"
						/>
						<InputRightElement>
							<Icon name="search" color="gray.300" />
						</InputRightElement>
					</InputGroup> */}
				</Flex>

				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					mt={8}
				>
					<Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
						All Posts
					</Heading>
					<Stack>
						{frontMatter.map((item) => {
							const { tags, title, summary, postId } = item;
							return (
								<>
									<Box pt={5} as="div" key="title">
										<NextLink href="/blog/[postId]" as={`/blog/${postId}`} passHref>
											<Box as="a">
												<Heading fontSize="xl">
													{title}
												</Heading>
												<Text fontSize="md" color="gray.500" mt={2}>{summary}</Text>
											</Box>
										</NextLink>
										{tags.length > 0 && tags.map((tag) => (
											<Tag as="a" href={`blog/${postId}`} mx={1} my={2} size="md" key={`${title}-${tag}`} variant="solid" backgroundColor="#76ced3">
												{tag}
											</Tag>
										))}
									</Box>
								</>
							);
						})}
					</Stack>
				</Flex>
			</Container>
		</>
	);
};

export async function getStaticProps() {
	const frontMatter = await getArticleInformation();
	return { props: { frontMatter: JSON.parse(JSON.stringify(frontMatter)) } };
}

export default Blog;
