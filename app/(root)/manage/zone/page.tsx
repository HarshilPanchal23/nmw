import React from "react";

const zones = [
  {
    name: "South Zone",
    states: ["Tamil Nadu", "Puducherry", "Mizoram", "Himachal Pradesh"],
    allStates: ["Tamil Nadu", "Puducherry", "Mizoram", "Himachal Pradesh"],
  },
  {
    name: "North Zone",
    states: ["Jammu & Kashmir", "Uttarakhand", "Assam"],
    allStates: ["Jammu & Kashmir", "Uttarakhand", "Assam"],
  },
  {
    name: "East Zone",
    states: ["Meghalaya", "West Bengal"],
    allStates: ["Meghalaya", "West Bengal"],
  },
  {
    name: "West Zone",
    states: ["Goa"],
    allStates: ["Goa"],
  },
  {
    name: "Central Zone",
    states: ["Bihar", "Telangana"],
    allStates: ["Bihar", "Telangana"],
  },
];

export default function ZonePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Zone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zones.map((zone, idx) => (
          <div key={zone.name} className="bg-white rounded-xl shadow p-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-lg flex items-center gap-2">
                <span className="material-icons text-base text-gray-500">place</span> {zone.name}
              </div>
              <span className="text-xs text-gray-500">{zone.states.length} States</span>
            </div>
            <div className="flex gap-2 mb-2">
              <select className="border rounded px-2 py-2 text-sm flex-1">
                <option>--Select a State--</option>
                {zone.allStates.map((state, i) => (
                  <option key={i}>{state}</option>
                ))}
              </select>
              <button className="bg-green-400 text-white px-4 py-2 rounded font-semibold flex items-center gap-1">
                <span className="material-icons text-sm">add</span> Add
              </button>
            </div>
            <div className="mb-2 text-xs text-gray-500">Assigned States</div>
            <div className="flex flex-col gap-2">
              {zone.states.map((state, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-100 rounded px-3 py-2">
                  <span>{state}</span>
                  <button className="text-gray-400 hover:text-red-500">
                    <span className="material-icons text-base">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 