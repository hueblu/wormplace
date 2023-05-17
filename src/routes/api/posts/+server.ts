import { getPosts } from '$lib/utils';
import { json } from '@sveltejs/kit'

import type { RequestHandler } from './$types';

const GET: RequestHandler = async () => {
    const allPosts = await getPosts();
    
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(a.meta.date as string).getTime() - new Date(b.meta.date as string).getTime();
    });

    return json(sortedPosts)
};

export { GET };