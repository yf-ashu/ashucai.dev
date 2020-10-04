import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const headerConfig = [
    { pageName: 'HOME', pageLink: '/' },
    { pageName: 'BLOG', pageLink: '/blog' },
    // { pageName: 'HOME', pageLink: '/home' },

];

const Header = () => (
    <HeaderWrapper>
        <LinkWrapper>
            {headerConfig.map((item) => <Link href={item.pageLink}>{item.pageName}</Link>)}
        </LinkWrapper>
    </HeaderWrapper>
);
const HeaderWrapper = styled.header`
    width:100%;
    border-bottom:#f3f3f3 1px solid;
`;
const LinkWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
a{
    display:inline-flex;
    text-decoration:none;
    padding:5px;
    color: silver;
}

`;
export default Header;
