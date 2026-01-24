// import { useParams } from 'next/navigation';
// const { id } = useParams();

import { blogService } from "@/services/blog.service";
import { Blog } from "@/types/blog.type";


export async function generateStaticParams() {
    const { data } = await blogService.getBlogPosts();
    return data?.data?.map((blog: Blog) => ({ id: blog.id })).splice(0, 3);
}

export default async function BlogPage({
    params,
}: {
    params: { id: string };
}) {

    const { id } = await params;

    const { data: blog } = await blogService.getBlogById(id);


    return (
        <article className="mx-auto max-w-4xl px-4 py-10">

            {/* Thumbnail */}
            <div className="relative mb-6 h-72 w-full overflow-hidden rounded-2xl bg-zinc-100">
                <img src={blog.thumbnail ?? "/placeholder.png"} alt="" />
            </div>

            {/* Tags */}
            <div className="mt-4 flex gap-2">
                {blog.tags?.map((tag: string) => {
                    return (
                        <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                        >
                            #{tag}
                        </span>
                    );
                })}
            </div>



            {/* Featured Badge */}
            {blog.isFeatured && (
                <span className="ml-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
                    ⭐ Featured
                </span>
            )}

            {/* Title */}
            <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">
                {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="mt-3 flex gap-4 text-sm text-zinc-500">
                <span>📅 {new Date(blog.createdAt).toDateString()}</span>
                <span>👁 {blog.views} views</span>
                <span>💬 {blog._count?.comments ?? 0} comments</span>
            </div>

            {/* Content */}
            <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {blog.content}
            </p>

            {/* Footer */}
            <div className="mt-12 flex items-center justify-between border-t pt-6 dark:border-zinc-800">
                <span className="text-sm text-green-600 font-medium">
                    {blog.status}
                </span>

                <button className="rounded-lg bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                    Add Comment
                </button>
            </div>

        </article>
    );
}
