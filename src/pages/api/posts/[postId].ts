export default (req: { query: { pid: any; }; }, res: { end: (arg0: string) => void; }) => {
    const {
        query: { pid },
    } = req;

    res.end(`Post: ${pid}`);
};
