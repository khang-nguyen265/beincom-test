import { Post } from "@/app/type";


export async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const post: Post = await response.json();
  return post;
}
