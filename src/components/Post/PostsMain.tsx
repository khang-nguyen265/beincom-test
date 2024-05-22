'use client'
import { FC, useState } from 'react';

import { usePosts } from '@/hooks/usePosts';
import PaginationBar from '../Common/PaginationBar';
import PostComponent from './Post';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

const DEFAULT_LIMIT = 10;

const PostsMain: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = usePosts({ title: searchTerm, filter: filterCriteria, sort: sortOrder, page, limit: DEFAULT_LIMIT });

  const handleSearchSubmit = () => {
    setPage(1);
  };

  const handleFilterChange = (filter: string) => {
    setFilterCriteria(filter);
    setPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortOrder(sort);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} onSubmit={handleSearchSubmit} />
        <FilterBar
          filterCriteria={filterCriteria}
          sortOrder={sortOrder}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {data?.data?.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </ul>
      { !isLoading && (
        <PaginationBar currentPage={page} totalPages={Math.ceil((data?.total || 0) / DEFAULT_LIMIT)} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default PostsMain;
