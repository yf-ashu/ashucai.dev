import React, { FC } from 'react';
import styled from 'styled-components';

import Header from './Header';

// type Props={

// }
const Layout: FC = ({ children }) => (
    <LayoutWrapper>
        <Header />

        {children}
    </LayoutWrapper>
);
const LayoutWrapper = styled.div`
width:100%;
/* display:grid; */
`;

export default Layout;
