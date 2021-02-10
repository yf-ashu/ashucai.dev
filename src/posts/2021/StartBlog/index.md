---
title: '使用 Next.js 與 Chakra UI 建立部落格'
createTime: '2021-01-23'
updateTime: '2021-01-23'
summary: ''
tags: [Next.js, Chakra]
---
## 前言
在整理 Notion 上的筆記時，發現自己搜集了很多資訊，但並沒有將他有系統化的整理出來。
因此並決定來寫 Blog 訓練自己的思緒與表達。

既然要做了就乾脆按照自己的喜好以及想玩的技術來決定前進的方向。

## 開始動工
先決定 Blog 中需要做到哪些 Feature，以及需要哪些頁面和使用哪些技術。
參考了 Gastby 與 Hexo，最後還是決定用 Next.js 來進行。

### Feature
- FrontMatter
- Custom style
- Dark mode
- Search
- Quick build Markdown template
- Heading Anchor
- Table of Contents
- SEO

### Design
Inspired from [leerob.io](https://leerob.io/)

### Tech Stack
* Next.js
* Chakra
* Netlify
* axios
* mdx
* TypeScript

### Structure
```text
.src
├── @types
├── components
├── libs                    # build time using api
├── pages                   # main router
│   ├── api                 # open api
│   ├── blog                # main 
├── posts                   # articles
├── utilities               # general function
└── ...
```
## Page & Style
使用 `_app.tsx` 來複寫掉原本 [App component](https://nextjs.org/docs/advanced-features/custom-app) 的行為。
覆寫內容包含 `global style`、`layout 排版`、`初始 SEO`。

```typescript
// _app.tsx
const App = ({ Component, pageProps }: AppProps) => (
	<MDXProvider components={MdxComponentStyle}>
		<ChakraProvider theme={theme}>
			<GlobalStyle>
				<DefaultSeo {...SEO} />
				<Header />
				<Component {...pageProps} />
			</GlobalStyle>
		</ChakraProvider>
	</MDXProvider>
);
export default App;
```
`MdxComponentStyle` 中設定了 Mdx 的樣式，可以根據 [html tag](https://mdxjs.com/getting-started?#mdxprovider) 分別進行不同的設定。
對於 `<Code>` 則使用 `prism-react-renderer` 來偵測語言來決定變數等的應顯示什麼顏色。

### Blog


### MDX
