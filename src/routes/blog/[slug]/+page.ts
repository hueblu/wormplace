import type { PageLoad } from './$types'


const load: PageLoad = async ({ params }) => {
    const post = await import(`../posts/${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default;
  
    return {
        post: {
            title,
            date,
            content,
        }
    };
};

export { load }