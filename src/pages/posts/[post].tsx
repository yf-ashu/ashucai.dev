import React from 'react';
import { useRouter } from 'next/router';
// https://nextjs.org/docs/routing/dynamic-routes
const Post = () => {
    const router = useRouter();
    const { post } = router.query;
    console.log(router);
    return <div>{post}</div>;
};
export default Post;
