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

export default function UploadNewsClipPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Clips</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ministry</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              {ministries.map((ministry) => (
                <option key={ministry}>{ministry}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Publication</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select News Source</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Edition</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Edition</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">CCM</label>
            <input className="w-full border rounded px-2 py-2 text-sm" value="N/A" readOnly />
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
            <label className="block text-xs text-gray-500 mb-1">Page Number</label>
            <input className="w-full border rounded px-2 py-2 text-sm" placeholder="Enter page number" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Clip Date</label>
            <input className="w-full border rounded px-2 py-2 text-sm" placeholder="dd/mm/yyyy" type="text" />
          </div>
        </div>
        <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center py-16 mb-6 text-center text-gray-500">
          <span className="material-icons text-5xl mb-2 text-gray-400">cloud_upload</span>
          <div className="mb-2">Drag and drop your news clips here</div>
          <div className="text-xs text-gray-400">PNG files only, max 5MB each</div>
        </div>
        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 text-gray-500 px-6 py-2 rounded font-semibold" disabled>Clear</button>
          <button className="bg-blue-400 text-white px-6 py-2 rounded font-semibold" disabled>Submit</button>
        </div>
      </div>
    </div>
  );
} 