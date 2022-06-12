import { FrontMatterProps } from '../../api/type';
import { Box, Divider, Flex, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
// 原標籤顏色 #76ced3
const Tags = ({ tags, title }: { tags: string[]; title: string }) => {
    return (
        <>
            {tags.length > 0 &&
                tags.map((tag) => (
                    <NextLink href={`blog?tag=${tag}`} passHref>
                        <Tag
                            as="a"
                            href={`blog?tag=${tag}`}
                            mt={5}
                            mr={2}
                            size="sm"
                            key={`${title}-${tag}`}
                            variant="solid"
                            color="#938f8f"
                            backgroundColor="#f4f4f4">
                            {tag}
                        </Tag>
                    </NextLink>
                ))}
        </>
    );
};
const Articles = ({ frontMatter }: { frontMatter: FrontMatterProps[] }) => {
    return (
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
                                <Tags tags={tags} title={title} />
                                <Divider my={3} w="100%" h="1em" color="gray.900" />
                            </Box>
                        </>
                    );
                })}
            </Stack>
        </Flex>
    );
};

export default Articles;
