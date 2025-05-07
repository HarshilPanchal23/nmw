"use client";
import React, { useState } from "react";

const initialPublications = [
  { publication: "Nagaland page" },
  { publication: "The Shillong Times" },
  { publication: "Highland Post" },
  { publication: "U Nongsain Hima" },
  { publication: "U Peitngor" },
];

export default function PublicationPage() {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [pub, setPub] = useState("");
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);
  const [publications, setPublications] = useState(initialPublications);

  const handleEdit = (idx: number) => {
    setEditIdx(idx);
    setPub(publications[idx].publication);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (idx: number) => {
    setDeleteIdx(idx);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteIdx !== null) {
      setPublications(prev => prev.filter((_, i) => i !== deleteIdx));
      setDeleteIdx(null);
      setShowDeleteModal(false);
    }
  };

  const handleSubmit = () => {
    if (!pub.trim()) return;

    if (isEditMode && editIdx !== null) {
      const updated = [...publications];
      updated[editIdx] = { publication: pub };
      setPublications(updated);
    } else {
      setPublications([...publications, { publication: pub }]);
    }

    setPub("");
    setEditIdx(null);
    setIsEditMode(false);
    setShowModal(false);
  };

  return (
    <div className="p-6">
      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">
            <h2 className="text-xl font-bold mb-4">
              {isEditMode ? "Edit Publication" : "Add Publication"}
            </h2>
            <label className="mb-1 font-medium">Publication</label>
            <input
              className="border rounded px-3 py-2 mb-4"
              value={pub}
              onChange={e => setPub(e.target.value)}
              placeholder="Publication"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setIsEditMode(false);
                  setPub("");
                  setEditIdx(null);
                }}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
              >
                {isEditMode ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && deleteIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">
            <h2 className="text-xl font-bold mb-4">Delete Publication</h2>
            <p className="mb-4">
              Are you sure you want to delete{" "}
              <span className="font-bold">{publications[deleteIdx].publication}</span>?<br />
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-6 py-2 rounded font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header and Actions */}
      <div className="flex justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">Publication</h1>
        <div className="flex justify-end gap-2 items-center mb-4">
          <input
            type="text"
            placeholder="Search publication"
            className="border rounded px-3 py-2 text-sm w-full max-w-xs"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-1"
            onClick={() => {
              setIsEditMode(false);
              setPub("");
              setShowModal(true);
            }}
          >
            <span className="material-icons">add</span>Create
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Publication</th>
              <th className="px-4 py-2 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{row.publication}</td>
                <td className="px-2 py-2">
                  <div className="flex gap-2">
                    <span
                      className="material-icons text-yellow-600 cursor-pointer"
                      onClick={() => handleEdit(idx)}
                    >
                      edit
                    </span>
                    <span
                      className="material-icons text-red-500 cursor-pointer"
                      onClick={() => handleDelete(idx)}
                    >
                      delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination (static) */}
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
