import React from "react";

export default function UploadNewsPaperPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Newspaper</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Publication</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Publication</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Edition</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Edition</option>
            </select>
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
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Select Language</option>
            </select>
          </div>
        </div>
        <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center py-16 mb-6 text-center text-gray-500">
          <span className="material-icons text-5xl mb-2 text-gray-400">cloud_upload</span>
          <div className="mb-2">Drag and drop files here</div>
          <div className="mb-2">or</div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold mb-2">Browse Files</button>
          <div className="text-xs text-gray-400">Maximum file size: 20MB</div>
        </div>
        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 text-gray-500 px-6 py-2 rounded font-semibold" disabled>Clear</button>
          <button className="bg-blue-400 text-white px-6 py-2 rounded font-semibold" disabled>Submit</button>
        </div>
      </div>
    </div>
  );
} 