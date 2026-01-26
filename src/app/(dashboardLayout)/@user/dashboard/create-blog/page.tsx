import CreateBlogFormServer from "@/components/modules/user/createBlogs/CreateBlogFormServer";
import { blogService } from "@/services/blog.service";
import { Blog } from "@/types/blog.type";

export default async function CreateBlogPage() {

    const { data } = await blogService.getBlogPosts();


    return ( 
        <div>
            <CreateBlogFormServer />
            {
                data.data.map((blog: Blog) => (
                    <div key={blog.id} className="mt-4 p-4 border rounded">
                        <h2 className="text-xl font-bold">{blog.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}
