import { FC, useState } from 'react';
import Link from 'next/link';
import { Post } from '@/app/type';


interface Props {
  post: Post;
}

const PostComponent: FC<Props> = ({ post }) => {

  return (
    <li className="bg-gray-100 rounded-md p-4 mb-4 hover:bg-gray-200 transition-colors">
      <Link href={`/posts/${post.id}`}>
        <div className="block">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.body}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostComponent;
