'use client'
import React, { useState } from "react";

const initialUsers = [
  {
    name: "Karan Kumbhani",
    email: "karan.kumbhani@sahanasystem.com",
    username: "Karan1",
    mobile: "1234567890",
    role: "Administrator",
    status: "Active",
    firstName: "Karan",
    lastName: "Kumbhani",
    ministry: ""
  },
  {
    name: "Smit Jani",
    email: "smit@smit.co.in",
    username: "Smit123",
    mobile: "9898989898",
    role: "User",
    status: "Active",
    firstName: "Smit",
    lastName: "Jani",
    ministry: ""
  },
  {
    name: "Saif Malik",
    email: "saif.malik@gmail.com",
    username: "saif",
    mobile: "9339586440",
    role: "User",
    status: "Active",
    firstName: "Saif",
    lastName: "Malik",
    ministry: ""
  },
  {
    name: "Alina Ali",
    email: "alinaali0119@gmail.com",
    username: "Alina01",
    mobile: "9876543210",
    role: "Administrator",
    status: "Active",
    firstName: "Alina",
    lastName: "Ali",
    ministry: ""
  },
  {
    name: "aryan Balaji",
    email: "aryan@gmail.com",
    username: "aryan123",
    mobile: "1234567890",
    role: "Administrator",
    status: "Active",
    firstName: "aryan",
    lastName: "Balaji",
    ministry: ""
  }
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);
  // Form state
  const [form, setForm] = useState({
    username: '', firstName: '', lastName: '', email: '', mobile: '', password: '', confirmPassword: '', role: 'PIB Officer', ministry: '', accessministry: '', active: true
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editIdx === null) {
      // Add user
      const newUser = {
        ...form,
        name: `${form.firstName} ${form.lastName}`,
        status: 'Active',
      };
      setUsers([...users, newUser]);
    } else {
      // Edit user
      const updatedUsers = users.map((u, idx) =>
        idx === editIdx ? { ...u, ...form, name: `${form.firstName} ${form.lastName}` } : u
      );
      setUsers(updatedUsers);
    }
    setShowAddUserModal(false);
    setEditIdx(null);
    setForm({ username: '', firstName: '', lastName: '', email: '', mobile: '', password: '', confirmPassword: '', role: 'PIB Officer', ministry: '', accessministry: '', active: true });
  };

  const handleCreate = () => {
    setForm({ username: '', firstName: '', lastName: '', email: '', mobile: '', password: '', confirmPassword: '', role: 'PIB Officer', ministry: '', accessministry: '', active: true });
    setEditIdx(null);
    setShowAddUserModal(true);
  };

  const handleEdit = (user: any, idx: number) => {
    setForm({
      username: user.username,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email,
      mobile: user.mobile,
      password: '',
      confirmPassword: '',
      role: user.role,
      ministry: user.ministry || '',
      accessministry: user.accessministry || '',
      active: user.active !== undefined ? user.active : true
    });
    setEditIdx(idx);
    setShowAddUserModal(true);
  };

  return (
    <div className="p-6">
     <div className="flex justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">User</h1>
        <div className="flex justify-end gap-2 items-center mb-4">
          <input
            type="text"
            placeholder="Search user"
            className="border rounded px-3 py-2 text-sm w-full max-w-xs"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition flex items-center gap-1" onClick={handleCreate}>
            <span className="material-icons">add</span>Create
          </button>
        </div>
      </div>
      {/* Add/Edit User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => { setShowAddUserModal(false); setEditIdx(null); }}
            >
              <span className="material-icons">close</span>
            </button>
            <h2 className="text-xl font-bold mb-4">{editIdx === null ? 'Add New User' : 'Edit User'}</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1">Username *</label>
                <input name="username" value={form.username} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">First Name *</label>
                <input name="firstName" value={form.firstName} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Last Name *</label>
                <input name="lastName" value={form.lastName} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Mobile Number *</label>
                <input name="mobile" value={form.mobile} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Password *</label>
                <input name="password" type="password" value={form.password} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required={editIdx === null} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Confirm Password *</label>
                <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required={editIdx === null} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Role *</label>
                <select name="role" value={form.role} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
                  <option>PIB Officer</option>
                  <option>Administrator</option>
                  <option>User</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Primary Ministry</label>
                <select name="ministry" value={form.ministry} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
                  <option value="">Select Primary Ministry</option>
                  <option>Ministry of Consumer Affairs Food and Public Distribution System</option>
                  <option>Ministry of Culture</option>
                  <option>Ministry of Defence</option>
                  <option>Ministry of Development of North Eastern Region</option>
                  <option>Ministry of Earth Sciences</option>
                  <option>Ministry of Education</option>
                  <option>Ministry of Electronics and Information Technology</option>
                  <option>Ministry of Environment Forest and Climate Change</option>
                  <option>Ministry of Finance</option>
                  <option>Ministry of Food Processing Industries</option>
                  <option>Ministry of Health and Family Welfare</option>
                  <option>Ministry of Heavy Industries</option>
                  <option>Ministry of Home Affairs</option>
                  <option>Ministry of Housing and UrbanAffairs</option>
                  <option>Ministry of Information and Broadcasting</option>
                  <option>Ministry of JalShakti</option>
                  <option>Ministry of Labour and Employment</option>
                  <option>Ministry of Law and Justice</option>
                  <option>Ministry of Micro Small and Medium Enterprises</option>
                  <option>Ministry of Mines</option>
                  <option>Ministry of Minority Affairs</option>
                  <option>Ministry of New and Renewable Energy</option>
                  <option>Ministry of Panchayati Raj</option>
                  <option>Ministry of Parliamentary Affairs</option>
                  <option>Ministry of Personnel Public Grievances and Pensions</option>
                  <option>Ministry of Petroleum and NaturalGas</option>
                  <option>Ministry of Ports Shipping and Waterways</option>
                  <option>Ministry of Power</option>
                  <option>Ministry of Railways</option>
                  <option>Ministry of Road Transport and Highways</option>
                  <option>Ministry of Rural Development</option>
                  <option>Ministry of Science and Technology</option>
                  <option>Ministry of Skill Development and Entrepreneurship</option>
                  <option>Ministry of Social Justice and Empowerment</option>
                  <option>Ministry of Statistics and Programme Implementation</option>
                  <option>Ministry of Steel</option>
                  <option>Ministry of Textiles</option>
                  <option>Ministry of Tourism</option>
                  <option>Ministry of Tribal Affairs</option>
                  <option>Ministry of Women and Child Development</option>
                  <option>Ministry of Youth Affairs and Sports</option>
                  <option>Ministry of External Affairs</option>
                  <option>PrimeMinister's Office</option>
                  <option>Ministry of Agriculture and Farmers' Welfare</option>
                  <option>Ministry of Animal Husbandry Dairying and Fisheries</option>
                  <option>Ministry of Chemicals and Fertilizers</option>
                  <option>Ministry Of Preschools</option>
                  <option>Ministry of Coal</option>
                  <option>Ministry of Commerce and Industry</option>
                  <option>Ministry of Ayush</option>
                  <option>Ministry of Corporate Affairs</option>
                  <option>Niti Aayog Yojana</option>
                  <option>Health Department</option>
                  <option>Examination Ministry</option>
                  <option>Ministry of Communications</option>
                  <option>Forest Ministry of India</option>
                  <option>Ministry of Forest</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Access Ministry</label>
                <select name="ministry" value={form.ministry} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
                  <option value="">Select Access Ministry</option>
                  <option>Ministry of Consumer Affairs Food and Public Distribution System</option>
                  <option>Ministry of Culture</option>
                  <option>Ministry of Defence</option>
                  <option>Ministry of Development of North Eastern Region</option>
                  <option>Ministry of Earth Sciences</option>
                  <option>Ministry of Education</option>
                  <option>Ministry of Electronics and Information Technology</option>
                  <option>Ministry of Environment Forest and Climate Change</option>
                  <option>Ministry of Finance</option>
                </select>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="active"
                  checked={form.active}
                  onChange={handleFormChange}
                  className="mr-2"
                  id="active-checkbox"
                />
                <label htmlFor="active-checkbox" className="text-sm font-semibold">Active</label>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold" onClick={() => { setShowAddUserModal(false); setEditIdx(null); }}>Cancel</button>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-semibold">{editIdx === null ? 'Add User' : 'Update User'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
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
                    <span className="material-icons text-yellow-600 cursor-pointer" onClick={() => handleEdit(user, idx)}>edit</span>
                    <span className="material-icons text-red-500 cursor-pointer" onClick={() => { setDeleteIdx(idx); setShowDeleteModal(true); }}>delete</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Pages 1 / 2 &nbsp; Total Data: {users.length}</div>
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
      {/* Delete Confirmation Modal */}
      {showDeleteModal && deleteIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-2">Delete User</h2>
            <p className="mb-6">
              Are you sure you want to delete <b>{users[deleteIdx].name}</b>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded font-semibold"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded font-semibold"
                onClick={() => {
                  setUsers(users.filter((_, i) => i !== deleteIdx));
                  setShowDeleteModal(false);
                  setDeleteIdx(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 