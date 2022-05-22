---
title: '使用 Next.js 與 Chakra UI 建立部落格'
createTime: '2021-01-23'
updateTime: '2021-02-18'
summary: '在整理 Notion 上的筆記時，發現自己搜集了很多資訊，但大部分都是碎片化的知識，並沒有將他有系統化的整理出來，
因此決定來寫 Blog 訓練自己的思緒與表達。'
tags: [Next.js, Chakra]
---
## 前言
在整理 Notion 上的筆記時，發現自己搜集了很多資訊，但大部分都是碎片化的知識，並沒有將他有系統化的整理出來，。
因此決定來寫 Blog 訓練自己的思緒與表達。

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
* Chakra UI
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

#### Blog Folder
`blog.tsx` 中因為文章內容都是靜態檔案，不必透過 Server Render，因此利用 `getStaticProps` 在 build time 的時候去打 API 來取得 blog 文章列表（Static Generation）。

blog list 中利用 `Next Link` 來連結到每篇文章，達到 [client-side route 與 SPA](https://nextjs.org/docs/routing/introduction#linking-between-pages) 的效果，但在連結有遇到一個問題：

1. NextLink 並不是 a 標籤，因此要在裡面再包一層 a Tag 來讓 a Tag 有的一些原生行為呈現，例如 right click 時可以叫出 contextmenu。
2. a Tag 中，因為轉導的行為已經由 `Next Link` 控制了，裡面那層 a tag 不必再多添加 href，但沒有實際設置 href 除了會導致 SEO 分數下降外，a Tag 本身預設的行為也還是無法呈現 ，因此在 NextLink 中使用 `passhref` 來將網址傳給 child component。

`[postId].tsx` 為 Dynamic Route，

#### Blog API



### MDX
在使用 `MDXProvider` 時發現 `custom style` 都不會出來，交叉比對 `next-mdx-remote` 之後，發現 mdx 在 compare 時會需要 @babel/core 處理
因此在下了 npm i -D @babel/core 之後樣式就出來了。
