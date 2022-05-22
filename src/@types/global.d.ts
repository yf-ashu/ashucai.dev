declare module '*.mdx' {
    // eslint-disable-next-line no-undef
    const MDXComponent: () => JSX.Element;
    export default MDXComponent;
}
declare module '*.md' {
    // eslint-disable-next-line no-undef
    const MDXComponent: () => JSX.Element;
    export default MDXComponent;
}
