'use client'
import DynamicTable, { Column } from "@/app/components/elements/Table";
import React from "react";
const columns: Column[] = [
  { columnKey: "id", columnLabel: "News ID" },
  { columnKey: "headline", columnLabel: "Headline",
    render: (value) =>
      <div title={value} className="text-xs w-[200px] text-nowrap text-ellipsis whitespace-nowrap overflow-hidden font-semibold">{value}</div>,
    minWidth: "200px"
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


const ministries = [
  "All Ministries",
  "Ministry of Consumer Affairs Food and Public Distribution System",
  "Ministry of Culture",
  "Ministry of Defence",
  "Ministry of Development of North Eastern Region",
  "Ministry of Earth Sciences",
  "Ministry of Education",
  "Ministry of Electronics and Information Technology",
  "Ministry of Environment Forest and Climate Change",
  "Ministry of Finance",
  "Ministry of Food Processing Industries",
  "Ministry of Health and Family Welfare",
  "Ministry of Heavy Industries",
  "Ministry of Home Affairs",
  "Ministry of Housing and UrbanAffairs",
  "Ministry of Information and Broadcasting",
  "Ministry of JalShakti",
  "Ministry of Labour and Employment",
  "Ministry of Law and Justice",
  "Ministry of Micro Small and Medium Enterprises",
  "Ministry of Mines",
  "Ministry of Minority Affairs",
  "Ministry of New and Renewable Energy",
  "Ministry of Panchayati Raj",
  "Ministry of Parliamentary Affairs",
  "Ministry of Personnel Public Grievances and Pensions",
  "Ministry of Petroleum and NaturalGas",
  "Ministry of Ports Shipping and Waterways",
  "Ministry of Power",
  "Ministry of Railways",
  "Ministry of Road Transport and Highways",
  "Ministry of Rural Development",
  "Ministry of Science and Technology",
  "Ministry of Skill Development and Entrepreneurship",
  "Ministry of Social Justice and Empowerment",
  "Ministry of Statistics and Programme Implementation",
  "Ministry of Steel",
  "Ministry of Textiles",
  "Ministry of Tourism",
  "Ministry of Tribal Affairs",
  "Ministry of Women and Child Development",
  "Ministry of Youth Affairs and Sports",
  "Ministry of External Affairs",
  "PrimeMinister's Office",
  "Ministry of Agriculture and Farmers' Welfare",
  "Ministry of Animal Husbandry Dairying and Fisheries",
  "Ministry of Chemicals and Fertilizers",
  "Ministry Of Preschools",
  "Ministry of Coal",
  "Ministry of Commerce and Industry",
  "Ministry of Ayush",
  "Ministry of Corporate Affairs",
  "Niti Aayog Yojana",
  "Health Department",
  "Examination Ministry",
  "Ministry of Communications",
  "Forest Ministry of India",
  "Ministry of Forest",
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
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Media</h1>
        <div className="flex gap-2 items-center">
        <button className="ml-auto bg-blue-600 text-white px-4 py-[6px] rounded shadow">Apply Filter</button>
        <select className="bg-white text-gray-700 rounded px-3 py-2 text-sm border border-gray-300 focus:outline-none shadow-sm w-full max-w-xs">
          {ministries.map((ministry) => (
            <option key={ministry}>{ministry}</option>
          ))}
        </select>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Zone</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>All Zones</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>All Languages</option>
            </select>
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
          <select className="w-full border rounded px-2 py-2 text-sm">
            <option>All Publications</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Edition</label>
          <select className="w-full border rounded px-2 py-2 text-sm">
            <option>All Editions</option>
          </select>
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
        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded flex items-center gap-2" disabled>
          <span className="material-icons">drafts</span> Add to Draft
        </button>
        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded flex items-center gap-2" disabled>
          <span className="material-icons">description</span> Share Report
        </button>
      </div>
      {/* Table */}
      <div className="py-2  bg-white shadow">
        <DynamicTable tableData={tableData} handleSelect={(e) => console.log(e)} columns={columns} rowActions={actions} />
      </div>
    </>
  );
} 