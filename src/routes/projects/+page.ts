import type { Metadata } from '@/lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const posts = await (await fetch("/api/projects")).json() as { metadata: Metadata, slug: string }[];
    return { posts };
}) satisfies PageLoad;