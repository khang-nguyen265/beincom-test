import { FC } from 'react';

interface FilterBarProps {
  filterCriteria: string;
  sortOrder: string;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

const FilterBar: FC<FilterBarProps> = ({ filterCriteria, sortOrder, onFilterChange, onSortChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
      <select 
        value={filterCriteria} 
        onChange={(e) => onFilterChange(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
      >
        <option value="">Sort by</option>
        <option value="date">Date</option>
        <option value="comments">Number of Comments</option>
      </select>
      <select 
        value={sortOrder} 
        onChange={(e) => onSortChange(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default FilterBar;
