import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    try {
        const project = await import(`../${params.project}.svx`)

        const { title, language } = project.metadata;
        const Content = project.default;

        return {
            Content,
            title,
            language,
        }
    } catch {
        throw error(404, { message: "Not Found" });
    }
}) satisfies PageLoad;