import React from "react";

export default function SearchPage() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Search across all media sources..." className="border rounded px-3 py-2 text-sm w-full" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Search</button>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Filters</span>
          <button className="text-blue-600 text-sm font-semibold">Reset Filters</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Media Type</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Media Type</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ministry</label>
            <input className="w-full border rounded px-2 py-2 text-sm" placeholder="" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Trend</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Trend</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Topic</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Topic</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Sentiment</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>All Sentiment</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Zone</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
              <option>Central</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">State</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select State</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Date Range</label>
            <input className="w-full border rounded px-2 py-2 text-sm" placeholder="Select date range" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Language</option>
            </select>
          </div>
          <div className="col-span-3 flex items-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Apply Filters</button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center justify-center">
        <span className="material-icons text-6xl text-gray-300 mb-2">sentiment_dissatisfied</span>
        <div className="text-lg font-semibold mb-1">No results found</div>
        <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria.</div>
      </div>
    </div>
  );
} 