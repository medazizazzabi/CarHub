import { Filter } from 'lucide-react';

export default function CustomerFilters() {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    >
      <Filter className="h-4 w-4 mr-2" />
      Filters
    </button>
  );
}