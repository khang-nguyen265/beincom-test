import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentsList from './CommentsList';
import { Comment } from '@/app/type';


jest.mock('./CommentItem', () => {
  return ({ userAvatar, userName, content }: { userAvatar: string, userName: string, content: string }) => (
    <div data-testid="comment-item">
      <img src={userAvatar} alt={userName} />
      <p>{userName}</p>
      <p>{content}</p>
    </div>
  );
});

describe('CommentsList', () => {
  const mockComments: Comment[] = [
    {
      id: 1,
      name: 'User 1',
      postId: 1,
      email: 'test@gmail.coom',
      body: 'Comment 1',
      userAvatar: '/user1.png',
    },
    {
      id: 2,
      name: 'User 2',
      postId: 1,
      email: 'test@gmail.coom',
      body: 'Comment 2',
      userAvatar: '/user2.png',
    },
  ];

  it('should render the list of comments', () => {
    render(<CommentsList comments={mockComments} />);

    const commentItems = screen.getAllByTestId('comment-item');
    expect(commentItems).toHaveLength(2);

    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('Comment 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
    expect(screen.getByText('Comment 2')).toBeInTheDocument();
  });

  it('should use default avatar if userAvatar is not provided', () => {
    const commentsWithoutAvatar: Comment[] = [
      {
        id: 3,
        name: 'User 3',
        postId: 1,
        email: 'test@gmail.coom',
        body: 'Comment 3',
        userAvatar: '',
      },
    ];

    render(<CommentsList comments={commentsWithoutAvatar} />);

    const defaultAvatar = screen.getByAltText('User 3').getAttribute('src');
    expect(defaultAvatar).toBe('/avatar.png');
  });
});
