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

const alertData = [
  { keyword: "road, accident", media: "Print", priority: "Critical", date: "07/05/2025", publication: "Navbharat Times" },
  { keyword: "army, army", media: "Print", priority: "Critical", date: "07/05/2025", publication: "Navbharat Times" },
  { keyword: "PoK", media: "Print", priority: "Critical", date: "07/05/2025", publication: "Navbharat Times" },
  { keyword: "Bar", media: "Print", priority: "Critical", date: "07/05/2025", publication: "Rozana Spokesman" },
  { keyword: "army, army", media: "Print", priority: "Critical", date: "07/05/2025", publication: "Rozana Spokesman" },
];

export default function NewsAlertsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">News Alerts</h1>
        <select className="bg-white text-gray-700 rounded px-3 py-2 text-sm border border-gray-300 focus:outline-none shadow-sm w-full max-w-xs">
          {ministries.map((ministry) => (
            <option key={ministry}>{ministry}</option>
          ))}
        </select>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Status</label>
          <select className="w-full border rounded px-2 py-2 text-sm">
            <option>All</option>
            <option>Unread</option>
            <option>Read</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Priority</label>
          <select className="w-full border rounded px-2 py-2 text-sm">
            <option>All</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
      {/* Alert Count Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center border-2 border-blue-400">
          <div className="flex-1">
            <div className="text-xs text-gray-500">Print</div>
            <div className="text-2xl font-bold">161</div>
          </div>
          <span className="material-icons text-3xl text-blue-400">description</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="flex-1">
            <div className="text-xs text-gray-500">Tv</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <span className="material-icons text-3xl text-green-400">desktop_windows</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="flex-1">
            <div className="text-xs text-gray-500">Online</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <span className="material-icons text-3xl text-purple-400">public</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="flex-1">
            <div className="text-xs text-gray-500">Social</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <span className="material-icons text-3xl text-pink-400">forum</span>
        </div>
      </div>
      {/* Print Alerts Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="font-semibold mb-2">Print Alerts</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-semibold">Alert Keyword</th>
                <th className="px-4 py-2 text-left font-semibold">Media Type</th>
                <th className="px-4 py-2 text-left font-semibold">Priority</th>
                <th className="px-4 py-2 text-left font-semibold">Date</th>
                <th className="px-4 py-2 text-left font-semibold">Publication</th>
                <th className="px-4 py-2 text-left font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {alertData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="font-medium text-gray-800">{row.keyword}</span>
                  </td>
                  <td className="px-4 py-2">{row.media}</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">{row.priority}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.publication}</td>
                  <td className="px-4 py-2 text-green-600 font-semibold cursor-pointer">✓ Mark as read</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Pages 1 / 33 &nbsp; Total Data: 161</div>
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