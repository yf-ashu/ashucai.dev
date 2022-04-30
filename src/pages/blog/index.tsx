import { getArticleInformation } from '../../lib/blog';
import NextLink from 'next/link';
import React from 'react';

import { NextSeo } from 'next-seo';

import { Box, Container, Flex, Heading, Stack, Tag, Text } from '@chakra-ui/react';

type FrontMatterProps = {
    tags: [string];
    title: string;
    summary: string;
    postId: string;
};
const Blog = ({ frontMatter }: { frontMatter: FrontMatterProps[] }) => (
    <>
        <NextSeo />
        <Container as="main" justifyContent="center" alignItems="flex-start" width="100%" mx="auto" pt={8}>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                <Heading as="h1" size="xl">
                    Blog
                </Heading>
            </Flex>

            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                <Stack>
                    {frontMatter.map((item) => {
                        const { tags, title, summary, postId } = item;
                        return (
                            <>
                                <Box pt={5} as="div" key={`${title}-article`}>
                                    <NextLink href={`/blog/${encodeURIComponent(postId)}`} passHref>
                                        <Box as="a">
                                            <Heading fontSize="xl">{title}</Heading>
                                            <Text fontSize="md" color="gray.500" mt={2}>
                                                {summary}
                                            </Text>
                                        </Box>
                                    </NextLink>
                                    {tags.length > 0 &&
                                        tags.map((tag) => (
                                            <Tag
                                                as="a"
                                                href={`blog/${postId}`}
                                                mx={0.5}
                                                my={2}
                                                size="md"
                                                key={`${title}-${tag}`}
                                                variant="solid"
                                                backgroundColor="#76ced3">
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

export async function getStaticProps() {
    const frontMatter = await getArticleInformation();
    return { props: { frontMatter: JSON.parse(JSON.stringify(frontMatter)) } };
}

export default Blog;
