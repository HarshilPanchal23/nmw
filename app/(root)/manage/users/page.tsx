import React from "react";

const users = [
  {
    name: "Karan Kumbhani",
    email: "karan.kumbhani@sahanasystem.com",
    username: "Karan1",
    mobile: "1234567890",
    role: "Administrator",
    status: "Active"
  },
  {
    name: "Smit Jani",
    email: "smit@smit.co.in",
    username: "Smit123",
    mobile: "9898989898",
    role: "User",
    status: "Active"
  },
  {
    name: "Saif Malik",
    email: "saif.malik@gmail.com",
    username: "saif",
    mobile: "9339586440",
    role: "User",
    status: "Active"
  },
  {
    name: "Alina Ali",
    email: "alinaali0119@gmail.com",
    username: "Alina01",
    mobile: "9876543210",
    role: "Administrator",
    status: "Active"
  },
  {
    name: "aryan Balaji",
    email: "aryan@gmail.com",
    username: "aryan123",
    mobile: "1234567890",
    role: "Administrator",
    status: "Active"
  }
];

export default function UsersPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-2">
          <span className="material-icons">add</span> Add New User
        </button>
      </div>
      <div className="flex justify-end mb-4">
        <input type="text" placeholder="Search user" className="border rounded px-3 py-2 text-sm w-full max-w-xs" />
      </div>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Email</th>
              <th className="px-4 py-2 text-left font-semibold">Username</th>
              <th className="px-4 py-2 text-left font-semibold">Mobile</th>
              <th className="px-4 py-2 text-left font-semibold">Role</th>
              <th className="px-4 py-2 text-left font-semibold">Status</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.mobile}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">{user.status}</span>
                </td>
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
          <div>Pages 1 / 2 &nbsp; Total Data: 9</div>
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
            <button className="px-2 py-1 rounded border bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
} 