import React from "react";

const ministry = [
  {
    ministry: "Ministry of Defence",
    keywords: [
      "PoK", "jammu", "Attack", "PoK", "terror attack", "army", "Attack", "army", "risk", "terror attack", "PoK",
      "Risk", "pakistan", "pahalgam", "indian", "Risk", "pakistan", "pahalgam", "indian",
      "defence", "MoD", "kill", "deal", "MoD", "kill", "deal", "defence", "MoD", "kill", "deal", "defence"
    ],
    lastUpdated: "07/05/2025, 12:33:43"
  },
  {
    ministry: "Ministry of Education",
    keywords: ["toraborah", "readers", "crore"],
    lastUpdated: ""
  },
  {
    ministry: "Ministry of Finance",
    keywords: ["loan", "fraud", "National Herald", "notice"],
    lastUpdated: "07/05/2025, 11:46:31"
  },
  {
    ministry: "Ministry of Labour and Employment",
    keywords: ["Rozgar", "PM", "jobs"],
    lastUpdated: "03/05/2025, 13:08:13"
  },
  {
    ministry: "Ministry of Law and Justice",
    keywords: ["Bar", "notice"],
    lastUpdated: "03/05/2025, 13:10:08"
  },
];

const priorityColor: Record<string, string> = {
  Critical: "bg-red-100 text-red-600",
  High: "bg-yellow-100 text-yellow-700",
  Low: "bg-yellow-100 text-yellow-500"
};

export default function MinistryAlertPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">Ministry</h1>

        <div className="flex justify-end gap-2 items-center mb-4">

          <input
            type="text"
            placeholder="Search ministry"
            className="border rounded px-3 py-2 text-sm w-full max-w-xs"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-1">
            <span className="material-icons">add</span>Create
          </button>

        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Ministry Name</th>
              <th className="px-4 py-2 text-left font-semibold">Keywords</th>
              <th className="px-4 py-2 text-left font-semibold">Last Updated</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ministry.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{row.ministry}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-1">
                    {row.keywords.map((kw, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 rounded px-2 py-0.5 text-xs">{kw}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{row.lastUpdated}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <span className="material-icons text-yellow-600 cursor-pointer">edit</span>
                    <span className="material-icons text-red-500 cursor-pointer">delete</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 