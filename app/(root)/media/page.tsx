'use client'
import Pagination from "@/app/components/elements/Pagination";
import DynamicTable, { Column } from "@/app/components/elements/Table";
import React, { useState } from "react";
import Select, { MultiValue, ActionMeta } from 'react-select';
import { ministries,Option } from "@/app/enum/ministry";
import { useRouter } from "next/navigation";
import AddToDraft from "@/app/components/Modal/media/addtoDraft";
const columns: Column[] = [
  { columnKey: "id", columnLabel: "News ID" },
  { columnKey: "headline", columnLabel: "Headline",
    render: (value) =>
      <div title={value} className="text-xs w-[380px] text-nowrap text-ellipsis whitespace-nowrap overflow-hidden font-semibold">{value}</div>,
    minWidth: "400px"
   },
  { columnKey: "date", columnLabel: "Date" },
  { columnKey: "ccm", columnLabel: "Ccm" },
  {
    columnKey: "editon",
    columnLabel: "Edition + Language",
    render: (_, row) =>
      <span className="text-xs font-semibold">{`${row.edition || ""} (${row.lang})`}</span>
  },
  {
    columnKey: "sentiment",
    columnLabel: "Sentiment",
    render: (value) =>
      value === "Negative" ? (
        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">Negative</span>
      ) : (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">{value}</span>
      ),
  },
  { columnKey: "publication", columnLabel: "Publication", minWidth: "200px" },
];

const actions = (row: any) => (
  <div className="flex gap-2">
    <span className="material-icons text-gray-500 cursor-pointer">edit</span>
    <span className="material-icons text-red-500 cursor-pointer">delete</span>
  </div>
);


const zones: Option[] = [
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'central', label: 'Central' }
];

const languages: Option[] = [
  { value: 'eng', label: 'English' },
  { value: 'hin', label: 'Hindi' },
  { value: 'mar', label: 'Marathi' },
  { value: 'guj', label: 'Gujarati' },
  { value: 'ben', label: 'Bengali' }
];

const publications: Option[] = [
  { value: 'financial_express', label: 'Financial Express' },
  { value: 'times_of_india', label: 'Times of India' },
  { value: 'hindustan_times', label: 'Hindustan Times' },
  { value: 'the_hindu', label: 'The Hindu' },
  { value: 'indian_express', label: 'Indian Express' }
];

const editions: Option[] = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'kolkata', label: 'Kolkata' }
];

const tableData = [
  {
    id: "news_20250507_7ud0k",
    headline: "Heavy rain alert in six states",
    sentiment: "Negative",
    publication: "Financial Express",
    edition: "Delhi",
    zone: "North",
    page: "1",
    date: "07/05/2025",
    ccm: "N/A",
    ministry: "Ministry of Earth Sciences",
    lang: "Eng",
  },
  {
    id: "news_20250507_8q13e",
    headline: "Transfer of Government Secretary Following Portfolio Change",
    sentiment: "Neutral",
    publication: "Financial Express",
    edition: "Delhi",
    zone: "North",
    page: "1",
    date: "07/05/2025",
    ccm: "N/A",
    ministry: "Ministry of Home Affairs",
    lang: "Eng",
  },
  {
    id: "news_20250507_5s3r5",
    headline: "Purulia Takes Initiative to Save Electricity",
    sentiment: "Neutral",
    publication: "Financial Express",
    edition: "Uttar Pradesh",
    zone: "North",
    page: "1",
    date: "07/05/2025",
    ccm: "N/A",
    ministry: "Ministry of Power",
    lang: "Eng",
  },
  {
    id: "news_20250507_vggd2",
    headline: "NO TEXT DETECTED",
    sentiment: "Neutral",
    publication: "Financial Express",
    edition: "Bihar",
    zone: "North",
    page: "1",
    date: "07/05/2025",
    ccm: "N/A",
    ministry: "Prime Minister's Office (PMO)",
    lang: "Eng",
  },
  {
    id: "news_20250507_6z0js",
    headline: "Weather Changes Again, Rain Expected Till 29th",
    sentiment: "Neutral",
    publication: "Financial Express",
    edition: "Mumbai",
    zone: "North",
    page: "1",
    date: "07/05/2025",
    ccm: "N/A",
    ministry: "Ministry of Environment, Forest and Climate Change",
    lang: "Eng",
  },
];

export default function MediaPage() {
  const router = useRouter();
  const [selectedZones, setSelectedZones] = useState<Option[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Option[]>([]);
  const [selectedPublications, setSelectedPublications] = useState<Option[]>([]);
  const [selectedEditions, setSelectedEditions] = useState<Option[]>([]);
  const [selectedNews, setSelectedNews] = useState<string[]>([]);
  const [selectedMinistry, setSelectedMinistry] = useState<Option | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>,
    setSelected: React.Dispatch<React.SetStateAction<Option[]>>
  ) => {
    setSelected(newValue as Option[]);
  };
  
  const handleAddToDraft = () => {
    if (selectedNews.length === 0) return;
    setIsOpen(true);
  };
  

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Media</h1>
        <div className="flex gap-2 items-center">
          <button className="ml-auto bg-blue-600 text-white px-4 py-[6px] rounded shadow">Show Analytics</button>
          <Select<Option>
          options={ministries}
          className="min-w-[300px]"
              value={selectedMinistry}
              onChange={(newValue) => setSelectedMinistry(newValue)}
              placeholder="Select Ministry"
            />
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Zone</label>
            <Select<Option, true>
              isMulti
              options={zones}
              value={selectedZones}
              onChange={(newValue, actionMeta) => handleChange(newValue, actionMeta, setSelectedZones)}
              placeholder="Select Zones"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <Select<Option, true>
              isMulti
              options={languages}
              value={selectedLanguages}
              onChange={(newValue, actionMeta) => handleChange(newValue, actionMeta, setSelectedLanguages)}
              placeholder="Select Languages"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Date Range</label>
            <input type="text" className="w-full border rounded px-2 py-2 text-sm" placeholder="Select date range" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Sentiment</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>All Sentiments</option>
            </select>
          </div>
        </div>
        <div className="flex items-end mt-2">
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded shadow">Apply Filter</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-4 border-b">
        <button className="py-2 px-4 border-b-2 border-blue-600 text-blue-600 flex items-center gap-2 font-semibold">
          <span className="material-icons">description</span> Print
        </button>
        <button className="py-2 px-4 text-gray-500 flex items-center gap-2">
          <span className="material-icons">tv</span> TV
        </button>
        <button className="py-2 px-4 text-gray-500 flex items-center gap-2">
          <span className="material-icons">public</span> Online
        </button>
        <button className="py-2 px-4 text-gray-500 flex items-center gap-2">
          <span className="material-icons">forum</span> Social
        </button>
      </div>
      {/* Publication and Edition Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Publication</label>
          <Select<Option, true>
            isMulti
            options={publications}
            value={selectedPublications}
            onChange={(newValue, actionMeta) => handleChange(newValue, actionMeta, setSelectedPublications)}
            placeholder="Select Publications"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Edition</label>
          <Select<Option, true>
            isMulti
            options={editions}
            value={selectedEditions}
            onChange={(newValue, actionMeta) => handleChange(newValue, actionMeta, setSelectedEditions)}
            placeholder="Select Editions"
          />
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded flex items-center gap-2" disabled>
          <span className="material-icons">file_download</span> Download Report
        </button>
        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded flex items-center gap-2" disabled>
          <span className="material-icons">file_download</span> Download Dossier
        </button>
        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded flex items-center gap-2" disabled>
          <span className="material-icons">share</span> Share Dossier
        </button>
        <button className="bg-blue-500  px-4 py-2 rounded flex items-center gap-2 disabled:bg-gray-200 text-black" disabled={!selectedNews.length} onClick={handleAddToDraft}>
          <span className="material-icons">drafts</span> Add to Draft
        </button>
        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded flex items-center gap-2" disabled>
          <span className="material-icons">description</span> Share Report
        </button>
      </div>
      {/* Table */}
      <div className="py-2 rounded-lg  bg-white shadow">
        <DynamicTable tableData={tableData} handleSelect={(e) => setSelectedNews(e)} columns={columns} rowActions={actions} />
         <div className="flex  px-4 pt-2 justify-end">
            <Pagination 
             currentPage={1}
             onPageChange={()=>{}}
             onPageSize={()=>{}}
             pageSize={5}
             totalPages={10}
            />
         </div>
      </div>

     { isOpen && <AddToDraft isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </>
  );
} 