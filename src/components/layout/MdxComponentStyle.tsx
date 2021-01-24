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
import React, { FC } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';
import styled from '@emotion/styled';

type Language =
| 'markup'
| 'bash'
| 'clike'
| 'c'
| 'cpp'
| 'css'
| 'javascript'
| 'jsx'
| 'coffeescript'
| 'actionscript'
| 'css-extr'
| 'diff'
| 'git'
| 'go'
| 'graphql'
| 'handlebars'
| 'json'
| 'less'
| 'makefile'
| 'markdown'
| 'objectivec'
| 'ocaml'
| 'python'
| 'reason'
| 'sass'
| 'scss'
| 'sql'
| 'stylus'
| 'tsx'
| 'typescript'
| 'wasm'
| 'yaml';
const Table:FC<any> = (props) => (
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
const THead = (props:any) => {
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

const TData = (props:any) => (
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

const Quote = (props:any) => {
	const { colorMode } = useColorMode();
	const bgColor = { light: 'cyan.50',
	  dark: '#97cfda' };

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
const CustomCode = ({ children, className }:{children:React.ReactNode, className:string}) => {
	const language = className.replace(/language-/, '')as Language;
	return (
		<>
			{ children && (
			<Highlight
				{...defaultProps}
				theme={theme}
				code={children.toString().trim()}
				language={language}
			>
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
			)}
		</>
	);
};

const MdxComponentStyle = { h1: (props:any) => <Heading as="h1" size="xl" my={4} {...props} />,
	h2: (props:any) => <Heading as="h2" size="lg" fontWeight="bold" mt={10} mb={4} {...props} />,
	h3: (props:any) => <Heading as="h3" fontSize="1.6rem" fontWeight="bold" mt={8} mb={3} {...props} />,
	h4: (props:any) => <Heading as="h4" size="md" fontWeight="bold" mt={6} mb={2.5} {...props} />,
	h5: (props:any) => <Heading as="h5" size="sm" fontWeight="bold" mt={6} mb={2.5} {...props} />,
	h6: (props:any) => <Heading as="h5" size="xs" fontWeight="bold" mt={6} mb={2.5} {...props} />,
	inlineCode: (props:any) => (
		<Code variantColor="yellow" fontSize="0.8em" {...props} color="#ff3434" px={1} />
	),
	br: (props:any) => <Box height="24px" {...props} />,
	hr: () => <Divider my={4} w="100%" h="1em" color="gray.200" />,
	table: Table,
	th: THead,
	td: TData,
	a: (props:any) => <Link color="#58b0b4" isExternal {...props} />,
	p: (props:any) => <Text as="p" mt={2} lineHeight="tall" {...props} />,
	ul: (props:any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
	ol: (props:any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
	li: (props:any) => <Box as="li" pb={1} {...props} />,
	code: CustomCode,
	blockquote: Quote };

export default MdxComponentStyle;
