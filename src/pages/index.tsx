import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import styled from 'styled-components';


function App({ post }: { post: number[] }) {
    console.log({ post });
    return (
        <div>
            123

        </div>
    );
}
export async function getStaticProps() {
    // fs 只能夠在 server 端使用
    // https://github.com/vercel/next.js/discussions/12124
    // https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
    // https://nextjs.org/docs/basic-features/pages#static-generation-recommended
    // https://juejin.im/post/6844903830103179272
    // https://github.com/vercel/next.js/blob/f46ddc693302b2f32c5aadfb91d82d9975ee014a/examples/blog-starter/lib/api.js#L36
    const postArray = fs.readdirSync('./src/posts');

    const directoryLevelInfo = fs
        .readdirSync('./src/posts', 'utf8')
        .map((item) => {
            console.log({ item });
            const itempath = `./src/posts/${item}`;

            const isDir = fs.lstatSync(itempath).isDirectory();

            return {
                name: item,
                path,
                isDir,
            };
        });
    // .sort((a, b) => (b.isDir - a.isDir || a.name > b.name ? 1 : -1));

    console.log({ directoryLevelInfo });
    const post = postArray.map((item) => item.split('.')[0]);
    return { props: { post } };
}

export default App;
