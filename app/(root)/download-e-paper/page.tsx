'use client'
import React, { useState } from "react";
import Select, { MultiValue, ActionMeta } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface Epaper {
  idx: number;
  name: string;
  edition: string;
  lang: string;
  date: string;
  size: string;
  pages: number;
}

// Move this to a separate data file or API endpoint
const epapers: Epaper[] = [
  { idx: 1, name: "The Times of India", edition: "Delhi", lang: "English", date: "Apr 16, 2025", size: "12.5 MB", pages: 24 },
  { idx: 2, name: "Hindustan Times", edition: "Mumbai", lang: "English", date: "Apr 16, 2025", size: "10.2 MB", pages: 20 },
  { idx: 3, name: "Dainik Jagran", edition: "Lucknow", lang: "Hindi", date: "Apr 16, 2025", size: "11.8 MB", pages: 22 },
  { idx: 4, name: "The Hindu", edition: "Chennai", lang: "English", date: "Apr 16, 2025", size: "9.7 MB", pages: 18 },
  { idx: 5, name: "Amar Ujala", edition: "Delhi", lang: "Hindi", date: "Apr 16, 2025", size: "10.5 MB", pages: 20 },
  { idx: 6, name: "The Indian Express", edition: "Delhi", lang: "English", date: "Apr 15, 2025", size: "11.2 MB", pages: 22 },
  { idx: 7, name: "Malayala Manorama", edition: "Kochi", lang: "Malayalam", date: "Apr 16, 2025", size: "9.8 MB", pages: 18 },
];

const editions: Option[] = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'kolkata', label: 'Kolkata' }
];

const languages: Option[] = [
  { value: 'eng', label: 'English' },
  { value: 'hin', label: 'Hindi' },
  { value: 'mar', label: 'Marathi' },
  { value: 'guj', label: 'Gujarati' },
  { value: 'ben', label: 'Bengali' }
];

export default function DownloadEpaperPage() {
  const [selectedEdition, setSelectedEdition] = useState<Option | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Option | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter epapers based on selections
  const filteredEpapers = epapers.filter(paper => {
    if (selectedEdition && paper.edition !== selectedEdition.label) return false;
    if (selectedLanguage && paper.lang !== selectedLanguage.label) return false;
    if (searchQuery && !paper.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEpapers.length / pageSize);
  const paginatedEpapers = filteredEpapers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Download E-Papers</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Edition</label>
          <Select<Option>
            options={editions}
            value={selectedEdition}
            onChange={(newValue) => {
              setSelectedEdition(newValue);
              setCurrentPage(1); // Reset to first page on filter change
            }}
            placeholder="All Editions"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Language</label>
          <Select<Option>
            options={languages}
            value={selectedLanguage}
            onChange={(newValue) => {
              setSelectedLanguage(newValue);
              setCurrentPage(1); // Reset to first page on filter change
            }}
            placeholder="All Languages"
          />
        </div>
        <div className="flex-1 flex items-end">
          <input 
            type="text" 
            placeholder="Search newspapers..." 
            className="border rounded px-3 py-2 text-sm w-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Index</th>
              <th className="px-4 py-2 text-left font-semibold">Publication Name</th>
              <th className="px-4 py-2 text-left font-semibold">Edition</th>
              <th className="px-4 py-2 text-left font-semibold">Language</th>
              <th className="px-4 py-2 text-left font-semibold">Date</th>
              <th className="px-4 py-2 text-left font-semibold">File Size</th>
              <th className="px-4 py-2 text-left font-semibold">Pages</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEpapers.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 whitespace-nowrap">{row.idx}</td>
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{row.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.edition}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.lang}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.size}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.pages}</td>
                <td className="px-4 py-2">
                  <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded flex items-center gap-2" disabled>
                    <span className="material-icons text-base">download</span> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Pages {currentPage} / {totalPages} &nbsp; Total Data: {filteredEpapers.length}</div>
          <div className="flex items-center gap-2">
            <span>Rows Per Page</span>
            <select 
              className="border rounded px-1 py-0.5"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1); // Reset to first page on page size change
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
} 