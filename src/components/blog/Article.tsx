import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

interface Props {
    source: any;
}
// eslint-disable-next-line react/prop-types
const Article: FC<Props> = ({ source }) => (
    <Container as="article" justifyContent="center" alignItems="flex-start" pt={3} pb={12} maxWidth="65ch">
        <MDXRemote {...source} />
    </Container>
);
export default Article;
