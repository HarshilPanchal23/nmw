'use client';
import React, { useState } from "react";

const initialRoles = [
  {
    name: "PIB Officer",
    description: "Checks and Uploads Data",
    users: 3,
    active: true,
    access: "Role Based Access"
  },
  {
    name: "Viewer",
    description: "Only views modules",
    users: 0,
    active: true,
    access: "Role Based Access"
  },
  {
    name: "SuperAdmin",
    description: "No description available",
    users: 5,
    active: true,
    access: "Role Based Access"
  },
  {
    name: "DataUploader",
    description: "No description available",
    users: 1,
    active: true,
    access: "Role Based Access"
  }
];

export default function RolePage() {
  const [roles, setRoles] = useState(initialRoles);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [roleName, setRoleName] = useState("");
  const [roleDesc, setRoleDesc] = useState("");
  const [roleActive, setRoleActive] = useState(true);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewIdx, setViewIdx] = useState<number | null>(null);

  const openAddModal = () => {
    setIsEditing(false);
    setRoleName("");
    setRoleDesc("");
    setRoleActive(true);
    setModalOpen(true);
  };

  const openEditModal = (idx: number) => {
    const role = roles[idx];
    setEditIdx(idx);
    setRoleName(role.name);
    setRoleDesc(role.description);
    setRoleActive(role.active);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!roleName.trim()) return;

    if (isEditing && editIdx !== null) {
      // Update existing
      const updated = roles.map((r, i) =>
        i === editIdx ? { ...r, name: roleName, description: roleDesc, active: roleActive } : r
      );
      setRoles(updated);
    } else {
      // Add new
      setRoles(prev => [
        ...prev,
        {
          name: roleName,
          description: roleDesc,
          users: 0,
          active: roleActive,
          access: "Role Based Access"
        }
      ]);
    }

    setModalOpen(false);
    setRoleName("");
    setRoleDesc("");
    setRoleActive(true);
    setEditIdx(null);
  };

  // Open view modal
  const openViewModal = (idx: number) => {
    setViewIdx(idx);
    setViewModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* Modal for Add/Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{isEditing ? "Edit Role" : "Add New Role"}</h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-icons">close</span>
              </button>
            </div>
            <label className="mb-1 font-medium">Role Name <span className="text-red-500">*</span></label>
            <input
              className="border rounded px-3 py-2 mb-4"
              value={roleName}
              onChange={e => setRoleName(e.target.value)}
              placeholder="Enter role name"
            />
            <label className="mb-1 font-medium">Description</label>
            <textarea
              className="border rounded px-3 py-2 mb-4"
              value={roleDesc}
              onChange={e => setRoleDesc(e.target.value)}
              placeholder="Enter role description"
            />
            <div className="flex items-center mb-6">
              <label className="mr-4 font-medium">Active</label>
              <button
                type="button"
                className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors ${roleActive ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => setRoleActive(a => !a)}
              >
                <span
                  className={`inline-block w-5 h-5 transform bg-white rounded-full shadow transition-transform ${roleActive ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
              <span className="ml-2 text-sm font-medium">{roleActive ? 'Active' : 'Inactive'}</span>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setModalOpen(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold">Cancel</button>
              <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold" disabled={!roleName.trim()}>
                {isEditing ? "Update Role" : "Add Role"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModalOpen && viewIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Role Information</h2>
              <button onClick={() => setViewModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="mb-2 flex"><span className="w-32 font-semibold">Role Name:</span> <span className="ml-2">{roles[viewIdx].name}</span></div>
            <div className="mb-2 flex"><span className="w-32 font-semibold">Description:</span> <span className="ml-2">{roles[viewIdx].description}</span></div>
            <div className="mb-6 flex items-center"><span className="w-32 font-semibold">Status:</span> <span className="ml-2">{roles[viewIdx].active ? <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span> : <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">Inactive</span>}</span></div>
            <div className="flex justify-end">
              <button onClick={() => setViewModalOpen(false)} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Close</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl font-bold">Roles</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search role"
            className="border rounded px-3 py-2 text-sm w-full max-w-xs"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-1" onClick={openAddModal}>
            <span className="material-icons">add</span>Create
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Role Name</th>
              <th className="px-4 py-2 text-left font-semibold">Description</th>
              <th className="px-4 py-2 text-left font-semibold">No. of Users</th>
              <th className="px-4 py-2 text-left font-semibold">Active</th>
              <th className="px-4 py-2 text-left font-semibold">Access</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{role.name}</td>
                <td className="px-4 py-2 text-gray-500">{role.description}</td>
                <td className="px-4 py-2">{role.users}</td>
                <td className="px-4 py-2">
                  {role.active && <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">Active</span>}
                </td>
                <td className="px-4 py-2">
                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-semibold">{role.access}</button>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <span className="material-icons text-blue-500 cursor-pointer" onClick={() => openViewModal(idx)}>info</span>
                    <span className="material-icons text-yellow-600 cursor-pointer" onClick={() => openEditModal(idx)}>edit</span>
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
