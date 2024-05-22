
import { FC } from 'react';
import CommentItem from './CommentItem';
import { Comment } from '@/app/type';


interface CommentsListProps {
  comments: Comment[];
}

const CommentsList: FC<CommentsListProps> = ({ comments }) => {

  return (
    <ul className="space-y-4">
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          userAvatar={comment.userAvatar || '/avatar.png'}
          userName={comment.name}
          content={comment. body}
        />
      ))}
    </ul>
  );
};

export default CommentsList;


