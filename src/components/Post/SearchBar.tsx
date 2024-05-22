import { FC } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  onSubmit: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearch, onSubmit }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleClear = () => {
    onSearch('');
    onSubmit();
  };


  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search posts..."
        className="p-2 border border-gray-300 rounded-md"
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="bg-gray-300 text-gray-700 py-1 px-2 rounded-r focus:outline-none"
        >
          X
        </button>
      )}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
