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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2 mb-8">
      <Input
        type="text"
        placeholder="Enter city name..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-grow bg-white/60 dark:bg-gray-700/60 border-gray-300 dark:border-gray-600"
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
        <Search className="h-5 w-5 mr-2" /> Search
      </Button>
    </form>
  );
}