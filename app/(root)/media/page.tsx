import React from "react";

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
    edition: "test",
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
    edition: "test",
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
    edition: "test",
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
    edition: "test",
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
    edition: "test",
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Media</h1>
        <select className="bg-white text-gray-700 rounded px-3 py-2 text-sm border border-gray-300 focus:outline-none shadow-sm w-full max-w-xs">
          {ministries.map((ministry) => (
            <option key={ministry}>{ministry}</option>
          ))}
        </select>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 grid grid-cols-1 md:grid-cols-5 gap-4">
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
        <div className="flex items-end">
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded shadow">Show Analytics</button>
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
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 text-left font-semibold">News ID</th>
              <th className="px-4 py-2 text-left font-semibold">Headline</th>
              <th className="px-4 py-2 text-left font-semibold">Sentiment</th>
              <th className="px-4 py-2 text-left font-semibold">Publication</th>
              <th className="px-4 py-2 text-left font-semibold">Edition</th>
              <th className="px-4 py-2 text-left font-semibold">Zone</th>
              <th className="px-4 py-2 text-left font-semibold">Page</th>
              <th className="px-4 py-2 text-left font-semibold">Date</th>
              <th className="px-4 py-2 text-left font-semibold">CCM</th>
              <th className="px-4 py-2 text-left font-semibold">Ministry</th>
              <th className="px-4 py-2 text-left font-semibold">Lang</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 text-blue-700 underline cursor-pointer">{row.id}</td>
                <td className="px-4 py-2 font-medium">{row.headline}</td>
                <td className="px-4 py-2">
                  {row.sentiment === "Negative" ? (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">Negative</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Neutral</span>
                  )}
                </td>
                <td className="px-4 py-2">{row.publication}</td>
                <td className="px-4 py-2">{row.edition}</td>
                <td className="px-4 py-2">{row.zone}</td>
                <td className="px-4 py-2">{row.page}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.ccm}</td>
                <td className="px-4 py-2">{row.ministry}</td>
                <td className="px-4 py-2">{row.lang}</td>
                <td className="px-4 py-2 flex gap-2">
                  <span className="material-icons text-gray-500 cursor-pointer">edit</span>
                  <span className="material-icons text-red-500 cursor-pointer">delete</span>
                  <span className="material-icons text-gray-500 cursor-pointer">share</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Pages 1 / 1165 &nbsp; Total Data: 5825</div>
          <div className="flex items-center gap-2">
            <span>Rows Per Page</span>
            <select className="border rounded px-1 py-0.5">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 rounded border bg-gray-100">Previous</button>
            <button className="px-2 py-1 rounded border bg-blue-600 text-white">1</button>
            <button className="px-2 py-1 rounded border bg-white">2</button>
            <button className="px-2 py-1 rounded border bg-white">3</button>
            <button className="px-2 py-1 rounded border bg-white">4</button>
            <button className="px-2 py-1 rounded border bg-white">5</button>
            <button className="px-2 py-1 rounded border bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
} 