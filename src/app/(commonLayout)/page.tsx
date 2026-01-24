import BlogCard from "@/components/modules/homePage/BlogCard";
import { blogService } from "@/services/blog.service";
import type { Blog } from "@/types/blog.type";


export const dynamic = "force-dynamic";

export default async function Home() {
  let posts: Blog[] = [];

  try {
    const res = await blogService.getBlogPosts(
      { isFeatured: false },
      { cache: "no-store" }
    );

    posts = res?.data?.data ?? [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    posts = [];
  }

  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-semibold">
        Total: {posts.length}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
