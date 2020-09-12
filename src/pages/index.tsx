import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import {
    space, layout, typography, color,
} from 'styled-system';

function App({ post }) {
    console.log({ post });
    return (
        <div>
            <Link href={`/posts/${post[0]}`}>
                {post[0]}
            </Link>
            <Link href={`/posts/${post[1]}`}>
                {/* <Time /> */}
                <div>a</div>

            </Link>
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

    // const directoryLevelInfo = fs
    //     .readdirSync('documentation', 'utf8')
    //     .map((item) => {
    //         const path = `documentation/${item}`;

    //         const isDir = fs.lstatSync(path).isDirectory();

    //         return {
    //             name: item,
    //             path,
    //             isDir,
    //         };
    //     })
    //     .sort((a, b) => (b.isDir - a.isDir || a.name > b.name ? 1 : -1));
    const post = postArray.map((item) => item.split('.')[0]);
    return { props: { post } };
}

export default App;
