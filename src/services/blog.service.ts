
const API_URL = process.env.API_URL;

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number;
}

interface GetBlogsParams {
    isFeatured?: boolean;
    search?: string;
}

export const blogSerice = {
    getBlogPosts: async function (params?: GetBlogsParams, options?: ServiceOptions) {
        try {

            const url = new URL(`${API_URL}/posts`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, String(value));
                    }
                })
            }


            const config: RequestInit = {};

            if (options?.cache) {
                config.cache = options.cache;
            }

            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate };
            }

            // const res = await fetch(`${API_URL}/posts`,{cache:'no-store'});
            // const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 10 } });
            const res = await fetch(url.toString(), config);

            const data = await res.json();

            return { data, error: null };
        } catch (error) {
            return { data: null, error: { message: 'Something went wrong' } };
        }
    }
}