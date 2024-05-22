import { FetchPostsParams, FetchPostsResponse } from '@/app/type';
import axios from 'axios';


export const fetchPosts = async (params: FetchPostsParams): Promise<FetchPostsResponse> => {
  const { title, filter, sort, page, limit } = params;
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _page: page,
      _limit: limit,
      title_like: title,
      _sort: filter,
      _order: sort,
    },
  });

  return {
    data: response.data,
    total: !title ? 100 : response.data.length,
  };
};
