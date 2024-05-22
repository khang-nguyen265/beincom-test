
import PostDetail from '@/components/PostDetail/PostDetail';
import { fetchPost } from '@/lib/fetchPost';

type Props = {
  params: {
    id: string;
  };
};

export const metadata = {
  title: "Post",
  description: `Post Detail`,
};

export default async function PostDetailPage ({ params }: Props) {
  const { id } = params!;
  const post = await fetchPost(Number(id));
 
  return <PostDetail post={post} />;
};


