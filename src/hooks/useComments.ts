
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Comment } from '@/app/type';
import {  useUser  } from "@clerk/nextjs";


export const useComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const user = useUser();
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        setComments(response.data);
      } catch (err) {
        setError('Error fetching comments');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const addComment = (content: string) => {

    
    const newComment: Comment = {
      id: comments.length,
      postId: postId,
      name: user?.user?.username!,
      email: user?.user?.emailAddresses?.[0]?.emailAddress || '',
      body: content,
      userAvatar:  user?.user?.imageUrl
    }

    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return { comments, loading, error, addComment };
};
