
export const getPosts = async () => {
    const posts = import.meta.glob('/src/routes/blog/posts/*.md');
    const iterablePosts = Object.entries(posts);

    const postNames = await Promise.all(
        iterablePosts.map(async ([path, resolver]) => {
            const metadata = await resolver();
            const postPath = "/blog/" + path.slice(23, -3);

            return {
                meta: metadata.metadata,
                path: postPath,
            };
        })
    );

    return postNames;
}
