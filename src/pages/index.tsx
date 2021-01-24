import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function App() {
	// TODO: Container 抽出來
	return (
		<>
			<Container
				as="main"
				justifyContent="center"
				alignItems="flex-start"
				width="100%"
				mx="auto"
				pt={8}
			>
				<Flex>
					<Heading as="h1" size="xl">
						Hey, I’m Ashu
					</Heading>
				</Flex>
			</Container>
		</>
	);
}

export default App;
