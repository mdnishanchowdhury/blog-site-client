import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { revalidateTag, updateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { toast } from 'sonner';
const API_URL = process.env.API_URL;

export default function CreateBlogFormServer() {

  const createBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    // comma separated string → array
    const tags = (formData.get('tags') as string)
      .split(',')
      .map(tag => tag.trim())
      .filter(Boolean);

    const blogData = {
      title,
      content,
      tags,
    };

    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    })

    if (res.ok) {
      revalidateTag('blogPosts', 'max');
      // updateTag('blogPosts');
    }
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>You can write your blog here</CardDescription>
      </CardHeader>

      <CardContent className='space-y-4'>
        {/* Single Form */}
        <form action={createBlog} className='space-y-4'>

          <FieldGroup>
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input type='text' name='title' placeholder='Blog title' required />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel>Content</FieldLabel>
              <Textarea name="content" placeholder="Write your blog" required />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel>Tags (comma separated)</FieldLabel>
              <Input type='text' name='tags' placeholder='web, Python, ts' />
            </Field>
          </FieldGroup>

          <Button type='submit' className='w-full'>
            Submit
          </Button>

        </form>
      </CardContent>
    </Card>
  )
}
