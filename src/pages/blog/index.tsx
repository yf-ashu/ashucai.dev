import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Time from '../../posts/time.md';

const Blog = () => (
    <BlogWrapper>
        <Time />
    </BlogWrapper>
);

const BlogWrapper = styled.header`
width:100%;
height:20vh;
border-bottom:#f3f3f3 1px solid;
`;
export default Blog;
