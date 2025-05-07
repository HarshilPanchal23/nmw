import React from "react";

const publications = [
  { publication: "Nagaland page", original: "Nagaland page" },
  { publication: "The Shillong Times", original: "The Shillong Times" },
  { publication: "Highland Post", original: "Highland Post" },
  { publication: "U Nongsain Hima", original: "U Nongsain Hima" },
  { publication: "U Peitngor", original: "U Peitngor" },
];

export default function PublicationPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Publication</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-2">
          <span className="material-icons">add</span> Add Publication
        </button>
      </div>
      <div className="flex justify-end mb-4">
        <input type="text" placeholder="Search publication..." className="border rounded px-3 py-2 text-sm w-full max-w-xs" />
      </div>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Publication</th>
              <th className="px-4 py-2 text-left font-semibold">Original Publication Name</th>
              <th className="px-4 py-2 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((row, idx) => (
              <tr key={idx} className={`border-b hover:bg-gray-50 ${idx === 3 ? 'bg-gray-100' : ''}`}>
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{row.publication}</td>
                <td className="px-4 py-2">{row.original}</td>
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
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Pages 1 / 47 &nbsp; Total Data: 232</div>
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