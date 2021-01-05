import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function App({ allPost = [] }: { allPost: number[] }) {
	return (
		<>
			<Container
				as="main"
				justifyContent="center"
				alignItems="flex-start"
				maxWidth="900px"
				width="100%"
				mx="auto"
				px={8}
			>
				<Flex>
					<Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
						Hey, I’m Ashu
					</Heading>
					<Text />
				</Flex>

			</Container>
		</>
	);
}

export default App;
