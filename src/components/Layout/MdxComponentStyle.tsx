/* eslint-disable react/jsx-props-no-spreading */
import { Box,
	Alert,
	Code,
	Heading,
	Kbd,
	Link,
	Text,
	Divider,
	useColorMode } from '@chakra-ui/react';
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';
import styled from '@emotion/styled';

const Table = (props) => (
	<Box overflowX="auto" w="full">
		<Box
			as="table"
			textAlign="left"
			mt="32px"
			w="full"
			{...props}
			borderBottomWidth="1px"
		/>
	</Box>
);

const THead = (props) => {
	const { colorMode } = useColorMode();
	const bg = { light: 'gray.50',
	  dark: 'whiteAlpha.100' };

	return (
		<Box
			as="th"
			bg={bg[colorMode]}
			fontWeight="semibold"
			p={2}
			fontSize="sm"
			{...props}
		/>
	);
};

const TData = (props) => (
	<Box
		as="td"
		p={2}
		borderTopWidth="1px"
		borderColor="inherit"
		fontSize="sm"
		whiteSpace="normal"
		{...props}
	/>
);

const Quote = (props) => {
	const { colorMode } = useColorMode();
	const bgColor = { light: 'cyan.50',
	  dark: 'cyan.800' };

	return (
		<Alert
			my={4}
			w="98%"
			bg={bgColor[colorMode]}
			variant="subtle"
			status="info"
			borderRadius="sm"
			css={{ '> *:first-of-type': { marginTop: 0,
	  			marginLeft: 8 } }}
			{...props}
		/>
	);
};
const Pre = styled.pre`
  text-align: left;
  margin: 1.5em 0;
  padding: 1.5em;
  overflow-x: auto;
  border-radius:5px;
  line-height:1.9;
  letter-spacing:0.6px;
  font-size:14px;
  font-family:  'Menlo Regular', Arial, sans-serif;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: left;
  padding-right: 1.5em;
  user-select: none;
  opacity: 0.3;
`;

const LineContent = styled.span`
  display: table-cell;
`;
const CustomCode = ({ children, className }) => {
	const language = className.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre className={className} style={style}>
					{tokens.map((line, i) => (
						<Line
							key={i}
							{...getLineProps({ line,
								key: i })}
						>
							<LineNo>{i + 1}</LineNo>
							<LineContent>
								{line.map((token, key) => (
									<span
										key={`${key}-${token}`}
										{...getTokenProps({ token,
											key })}
									/>
				  ))}
							</LineContent>
						</Line>
					))}
				</Pre>
			)}
		</Highlight>

	);
};

const MdxComponentStyle = { h1: (props) => <Heading as="h1" size="2xl" my={4} {...props} />,
	h2: (props) => <Heading as="h2" fontWeight="bold" size="xl" my={4} {...props} />,
	h3: (props) => <Heading as="h3" size="lg" fontWeight="bold" my={3} {...props} />,
	h4: (props) => <Heading as="h4" size="md" fontWeight="bold" my={3} {...props} />,
	h5: (props) => <Heading as="h5" size="sm" fontWeight="bold" my={3} {...props} />,
	h6: (props) => <Heading as="h5" size="xs" fontWeight="bold" my={3} {...props} />,
	inlineCode: (props) => (
		<Code variantColor="yellow" fontSize="0.8em" {...props} color="#ff3434" px={1} />
	),
	br: (props) => <Box height="24px" {...props} />,
	hr: (props) => <Divider my={4} w="100%" h="1em" color="gray.200" />,
	table: Table,
	th: THead,
	td: TData,
	a: (props) => <Link color="#58b0b4" isExternal {...props} />,
	p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
	ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
	ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
	li: (props) => <Box as="li" pb={1} {...props} />,
	code: CustomCode,
	blockquote: Quote };

export default MdxComponentStyle;
