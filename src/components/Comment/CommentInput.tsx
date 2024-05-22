
import { FC, useState } from 'react';

interface CommentInputProps {
  postId: number;
  onAddComment: (comment: string) => void;
}

const CommentInput: FC<CommentInputProps> = ({ postId, onAddComment }) => {
  const [comment, setComment] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        className="w-full p-2 border border-gray-300 rounded-md"
        rows={3}
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default CommentInput;
