import React, { FC } from 'react';
import { Heading, Text, Flex, Box, Container } from '@chakra-ui/react';

const BlogPost: FC = ({ content }) => (
	<Container
		as="article"
		justifyContent="center"
		alignItems="flex-start"
		m="0 auto 4rem auto"
		maxWidth="700px"
	>
		<div className="w-full prose lg:prose-lg post-body overflow-y-hidden">{content}</div>

		<Box mb={8} display="block" width="100%">
			<Flex
				width="100%"
				align="flex-start"
				justifyContent="space-between"
				flexDirection={['column', 'row']}
			>
				<Heading size="md" as="h3" mb={2} fontWeight="medium" />
				<Text
					color="gray.500"
					minWidth="105px"
					mb={[4, 0]}
				/>
			</Flex>
		</Box>
	</Container>

);
export default BlogPost;
