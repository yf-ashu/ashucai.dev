import React from 'react';
import { useRouter } from 'next/router';
import Time from '../../posts/2020/time.md';

// https://nextjs.org/docs/routing/dynamic-routes
const Post = () => {
    const router = useRouter();
    const { post } = router.query;
    console.log(router);
    return (
        <div>
            {post}
            <Time />

            {/* <Sample /> */}
        </div>
    );
};
export default Post;
