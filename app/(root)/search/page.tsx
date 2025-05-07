'use client'
import { ministries ,Option} from "@/app/enum/ministry";
import React, { useState } from "react";
import Select, { MultiValue, ActionMeta } from 'react-select';


interface SearchResult {
  id: number;
  title: string;
  source: string;
  date: string;
  sentiment: string;
  mediaType: string;
}

const mediaTypes: Option[] = [
  { value: 'print', label: 'Print' },
  { value: 'tv', label: 'TV' },
  { value: 'online', label: 'Online' },
  { value: 'social', label: 'Social' }
];

const trends: Option[] = [
  { value: 'rising', label: 'Rising' },
  { value: 'falling', label: 'Falling' },
  { value: 'stable', label: 'Stable' }
];

const topics: Option[] = [
  { value: 'politics', label: 'Politics' },
  { value: 'economy', label: 'Economy' },
  { value: 'technology', label: 'Technology' },
  { value: 'sports', label: 'Sports' },
  { value: 'entertainment', label: 'Entertainment' }
];

const sentiments: Option[] = [
  { value: 'positive', label: 'Positive' },
  { value: 'negative', label: 'Negative' },
  { value: 'neutral', label: 'Neutral' }
];

const zones: Option[] = [
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'central', label: 'Central' }
];

const states: Option[] = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'tamil_nadu', label: 'Tamil Nadu' },
  { value: 'west_bengal', label: 'West Bengal' }
];

const languages: Option[] = [
  { value: 'eng', label: 'English' },
  { value: 'hin', label: 'Hindi' },
  { value: 'mar', label: 'Marathi' },
  { value: 'guj', label: 'Gujarati' },
  { value: 'ben', label: 'Bengali' }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMediaType, setSelectedMediaType] = useState<Option[]>([]);
  const [selectedTrend, setSelectedTrend] = useState<Option | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Option | null>(null);
  const [selectedSentiment, setSelectedSentiment] = useState<Option | null>(null);
  const [selectedZone, setSelectedZone] = useState<Option | null>(null);
  const [selectedState, setSelectedState] = useState<Option | null>(null);
  const [selectedLanguage, setSelectedLanguage] =  useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/search', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     query: searchQuery,
      //     filters: {
      //       mediaType: selectedMediaType?.value,
      //       trend: selectedTrend?.value,
      //       topic: selectedTopic?.value,
      //       sentiment: selectedSentiment?.value,
      //       zone: selectedZone?.value,
      //       state: selectedState?.value,
      //       language: selectedLanguage?.value,
      //     }
      //   })
      // });
      // const data = await response.json();
      // setSearchResults(data);
      
      // Temporary mock data
      setSearchResults([]);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMediaType([]);
    setSelectedTrend(null);
    setSelectedTopic(null);
    setSelectedSentiment(null);
    setSelectedZone(null);
    setSelectedState(null);
    setSelectedLanguage([]);
    setSearchResults([]);
  };

  const handleChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>,
    setSelected: React.Dispatch<React.SetStateAction<Option[]>>
  ) => {
    setSelected(newValue as Option[]);
  };
  const [selectedMinistry, setSelectedMinistry] = useState<Option | null>(null);
  return (
    <div >
         <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Search</h1>
        <Select<Option>
          options={ministries}
          className="min-w-[300px]"
              value={selectedMinistry}
              onChange={(newValue) => setSelectedMinistry(newValue)}
              placeholder="Select Ministry"
            />
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            placeholder="Search across all media sources..." 
            className="border rounded px-3 py-2 text-sm w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Filters</span>
          <button 
            className="text-blue-600 text-sm font-semibold"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Media Type</label>
            <Select<Option, true>
              isMulti
              options={mediaTypes}
              value={selectedMediaType}
              onChange={(newValue, actionMeta) => handleChange(newValue, actionMeta, setSelectedMediaType)}
              // onChange={(newValue) => setSelectedMediaType(newValue)}
              placeholder="Select Media Type"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <Select<Option, true>
              isMulti
              options={languages}
              value={selectedLanguage}
              onChange={(newValue, actionMeta) => handleChange(newValue, actionMeta, setSelectedLanguage)}
              placeholder="Select Language"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Trend</label>
            <Select<Option>
              options={trends}
              value={selectedTrend}
              onChange={(newValue) => setSelectedTrend(newValue)}
              placeholder="Select Trend"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Topic</label>
            <Select<Option>
              options={topics}
              value={selectedTopic}
              onChange={(newValue) => setSelectedTopic(newValue)}
              placeholder="Select Topic"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Sentiment</label>
            <Select<Option>
              options={sentiments}
              value={selectedSentiment}
              onChange={(newValue) => setSelectedSentiment(newValue)}
              placeholder="All Sentiment"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Zone</label>
            <Select<Option>
              options={zones}
              value={selectedZone}
              onChange={(newValue) => setSelectedZone(newValue)}
              placeholder="Select Zone"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">State</label>
            <Select<Option>
              options={states}
              value={selectedState}
              onChange={(newValue) => setSelectedState(newValue)}
              placeholder="Select State"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Date Range</label>
            <input className="w-full border rounded px-2 py-2 text-sm" placeholder="Select date range" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          
          <div className="col-span-3 flex items-end">
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? 'Applying...' : 'Apply Filters'}
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <div className="mt-4 text-gray-600">Searching...</div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="bg-white rounded-lg shadow p-4">
          {/* TODO: Add search results table/grid */}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center justify-center">
          <span className="material-icons text-6xl text-gray-300 mb-2">sentiment_dissatisfied</span>
          <div className="text-lg font-semibold mb-1">No results found</div>
          <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria.</div>
        </div>
      )}
    </div>
  );
} 