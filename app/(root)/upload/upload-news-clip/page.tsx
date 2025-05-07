import React from "react";

export default function UploadNewsClipPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Clips</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ministry</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Ministry</option>
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
              <option>Select Zone</option>
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