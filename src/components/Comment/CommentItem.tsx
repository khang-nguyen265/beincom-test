
import { FC } from 'react';


interface CommentItemProps {
  userAvatar: string;
  userName: string;
  content: string;
}

const CommentItem: FC<CommentItemProps> = ({ userAvatar, userName, content }) => {

  return (
    <li className="p-4 border border-gray-300 rounded-md flex items-start space-x-4">
      <img src={userAvatar } alt={`${userName}'s avatar`} className="w-10 h-10 rounded-full" />
      <div>
        <h4 className="font-semibold">{userName}</h4>
        <p className="text-gray-700">{content}</p>
      </div>
    </li>
  );
};

export default CommentItem;
