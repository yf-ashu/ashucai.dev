import { getArticleInformation } from '../../lib/blog';
import Articles from '../../components/blog/Articles';
import { FrontMatterProps } from '../../lib/type';
import React from 'react';

import { NextSeo } from 'next-seo';

import { Container, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const FilterTag = ({ frontMatter, filterTag }: { frontMatter: FrontMatterProps[]; filterTag?: string | string[] }) => {
    if (!filterTag && filterTag?.length !== 1) {
        return frontMatter;
    }

    return frontMatter.filter((item) => {
        const result = item.tags.some((tag) => tag === filterTag);
        if (result) {
            return item;
        }
    });
};
const Blog = ({ frontMatter }: { frontMatter: FrontMatterProps[] }) => {
    const router = useRouter();
    const { tag } = router.query;
    const articleFrontMatter = FilterTag({ frontMatter, filterTag: tag });

    console.log({ articleFrontMatter });
    return (
        <>
            <NextSeo />
            <Container as="main" justifyContent="center" alignItems="flex-start" width="100%" mx="auto" pt={8}>
                <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                    <Heading as="h1" size="xl">
                        Blog
                    </Heading>
                    <Articles frontMatter={articleFrontMatter} />
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
