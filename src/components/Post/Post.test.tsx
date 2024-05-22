import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Post } from '@/app/type';
import { useRouter } from 'next/router';
import PostComponent from './Post';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PostComponent', () => {
  const mockPost: Post = {
    id: 1,
    userId: 1,
    title: 'Test Title',
    body: 'Test Body',
  };

  it('should render post title and body', () => {
    render(<PostComponent post={mockPost} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  it('should render a link with the correct href', () => {
    render(<PostComponent post={mockPost} />);
    
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/posts/1');
  });

  it('should apply hover styles', () => {
    render(<PostComponent post={mockPost} />);
    
    const postElement = screen.getByText('Test Title').closest('li');
    expect(postElement).toHaveClass('hover:bg-gray-200');
  });
});
