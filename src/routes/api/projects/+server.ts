import type { Metadata } from '@/lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const posts = import.meta.glob("@projects/*.svx");
    const all_posts = await Promise.all(
        Object.entries(posts).map(async ([path, resolver]) => {
            const { metadata } = (await resolver()) as { metadata: Metadata };
            const split_path = path.split("/");
            const slug = split_path[split_path.length - 1].slice(0, -4);

            return {
                metadata,
                slug,
            }
        })
    );
    
    return json(all_posts);
};