import React from "react";

const roles = [
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
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Roles</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-2">
          <span className="material-icons">add</span> Add New Role
        </button>
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
                    <span className="material-icons text-blue-500 cursor-pointer">info</span>
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