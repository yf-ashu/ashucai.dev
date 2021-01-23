import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<StickyNav
				flexDirection="row"
				justifyContent="flex-end"
				alignItems="center"
				maxWidth="900px"
				width="100%"
				as="nav"
				p={8}
				mx="auto"
			>

				<Box>

					<NextLink href="/blog" passHref>
						<Button as="a" variant="link" p={[1, 4]}>
							Blog
						</Button>
					</NextLink>
					<NextLink href="/" passHref>
						<Button as="a" variant="link" p={[1, 4]}>
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

			</StickyNav>

			{/* <Footer /> */}
		</>
	);
};

export default Header;
