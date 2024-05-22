'use client'
import { FC, useState } from 'react';
import CommentInput from '../Comment/CommentInput';
import CommentsList from '../Comment/CommentsList';
import { useComments } from '@/hooks/useComments';
import { Post } from '@/app/type';

interface PostDetailProps {
  post: Post;
}

const PostDetail: FC<PostDetailProps> = ({ post }) => {
  const { addComment, comments, loading } = useComments(post.id);


  return (
    <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-8">{post.body}</p>
      <CommentInput postId={post.id} onAddComment={addComment} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default PostDetail;
