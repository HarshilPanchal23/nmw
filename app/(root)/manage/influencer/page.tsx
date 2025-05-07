"use client"
import React, { useState } from "react";

const influencers = [
  { name: "Jansatta", link: "https://www.facebook.com/Jansatta" },
  { name: "Dailythanthi", link: "https://www.facebook.com/dailythanthi" },
  { name: "dinakaran daily newspaper", link: "https://www.facebook.com/dinakaran" },
  { name: "The Economic Times", link: "https://www.facebook.com/EconomicTimes" },
  { name: "Eenadu.net", link: "https://www.facebook.com/eenadu" },
  { name: "The Financial Express", link: "https://www.facebook.com/thefinancialexpress" },
  { name: "Maharashtra Times", link: "https://www.facebook.com/maharashtratimes" },
  { name: "Loksatta", link: "https://www.facebook.com/Loksatta" },
  { name: "Prajavani", link: "https://www.facebook.com/prajavani" },
  { name: "Navbharat Times Online", link: "https://www.facebook.com/navbharattimes" },
];

export default function InfluencerPage() {
  const [tab, setTab] = useState("Facebook");
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Influencers</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-2">
          <span className="material-icons">add</span> Add Handle
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => setTab("Facebook")} className={`flex-1 py-2 rounded ${tab === "Facebook" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700"}`}>Facebook</button>
          <button onClick={() => setTab("Twitter")} className={`flex-1 py-2 rounded ${tab === "Twitter" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700"}`}>X (Twitter)</button>
          <button onClick={() => setTab("Instagram")} className={`flex-1 py-2 rounded ${tab === "Instagram" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700"}`}>Instagram</button>
        </div>
        <div className="flex justify-end mb-4">
          <input type="text" placeholder="Search influencer" className="border rounded px-3 py-2 text-sm w-full max-w-xs" />
        </div>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Link</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tab === "Facebook" && influencers.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{row.name}</td>
                <td className="px-4 py-2">
                  <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline flex items-center gap-1">
                    {row.link.length > 30 ? row.link.slice(0, 30) + "..." : row.link}
                    <span className="material-icons text-xs">open_in_new</span>
                  </a>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <span className="material-icons text-yellow-600 cursor-pointer">edit</span>
                    <span className="material-icons text-red-500 cursor-pointer">delete</span>
                  </div>
                </td>
              </tr>
            ))}
            {tab !== "Facebook" && (
              <tr>
                <td className="px-4 py-2 text-gray-400" colSpan={3}>No data for this tab.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 