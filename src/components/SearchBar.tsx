import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
  initialLocation?: string;
}

export default function SearchBar({ onSearch, initialLocation = "" }: SearchBarProps) {
  const [location, setLocation] = useState(initialLocation);

  const handleSearch = () => {
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-md items-center space-x-2 p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg dark:bg-gray-800/70">
      <Input
        type="text"
        placeholder="Enter city name (e.g., New York)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-grow bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
      />
      <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
        <Search className="h-4 w-4 mr-2" /> Search
      </Button>
    </div>
  );
}