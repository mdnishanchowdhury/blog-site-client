import { Blog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Blog;
}

export default function BlogCard({ post }: PostCardProps) {
  return (
    <Link href={`/blogs/${post.id}`}>
      <div className="group cursor-pointer rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-black">

        {/* Thumbnail */}
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={post.thumbnail ?? "/placeholder.png"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-zinc-900 dark:text-white">
          {post.title}
        </h2>

        {/* Content */}
        <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {post.content}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
          <span>{new Date(post.createdAt).toDateString()}</span>
          <span>👁 {post.views}</span>
        </div>

        {/* Read More Button */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-zinc-700 dark:bg-white dark:text-black dark:group-hover:bg-zinc-200">
            Read more →
          </span>
        </div>

      </div>
    </Link>
  );
}
