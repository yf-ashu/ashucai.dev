import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Nav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: blur(20px);
`;

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Nav
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                width="100%"
                as="nav"
                pt={4}
                px={8}
                mt={10}
                mx="auto">
                <Box pt={4}>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="link" mr={3}>
                            Blog
                        </Button>
                    </NextLink>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="link" mx={8}>
                            About
                        </Button>
                    </NextLink>
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                        onClick={toggleColorMode}
                        variant="ghost"
                    />
                </Box>
            </Nav>
        </>
    );
};

export default Header;
