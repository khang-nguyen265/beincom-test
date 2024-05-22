
import { FetchPostsParams, FetchPostsResponse, Post } from '@/app/type';
import { fetchPosts } from '@/lib/fetchPosts';
import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query';


export function usePosts(params: FetchPostsParams): UseQueryResult<FetchPostsResponse, Error> {
  const queryKey: QueryKey = ['posts', params];

  return useQuery<FetchPostsResponse, Error>({
    queryKey,
    queryFn: () => fetchPosts(params),
  });
}
