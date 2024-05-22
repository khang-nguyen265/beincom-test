

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  userAvatar?: string
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FetchPostsParams {
  title?: string;
  filter?: string;
  sort?: string;
  page: number;
  limit: number;
}

export interface FetchPostsResponse {
  data: Post[];
  total: number;
}