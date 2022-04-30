import React, { FC } from 'react';
import { Heading, Text, Flex, Box, Container } from '@chakra-ui/react';

interface Props {
    children: React.ReactNode;
}
// eslint-disable-next-line react/prop-types
const BlogPost: FC<Props> = ({ children }) => (
    <Container as="article" justifyContent="center" alignItems="flex-start" pt={3} pb={12}>
        <div>{children}</div>
    </Container>
);
export default BlogPost;
