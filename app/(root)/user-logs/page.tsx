"use client"
import React, { useState } from "react";

const logs = [
  {
    date: "05/05/2025 8:29:19 PM",
    user: "NMW User 1",
    email: "nmw@sahanasystem.com",
    ip: "49.36.137.20",
    browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X ...",
    platform: "web",
    duration: "453 seconds",
    status: "Logged Out"
  },
  {
    date: "05/07/2025 9:56:14 AM",
    user: "aryan Balaji",
    email: "aryan@gmail.com",
    ip: "180.151.91.134",
    browser: "Mozilla/5.0 (X11; Linux x86_64) AppleW...",
    platform: "web",
    duration: "573 seconds",
    status: "Logged Out"
  },
  {
    date: "04/30/2025 11:52:36 AM",
    user: "akshat goel",
    email: "akshat77@gmail.com",
    ip: "152.59.68.16",
    browser: "Mozilla/5.0 (Windows NT 10.0; Win64; ...",
    platform: "web",
    duration: "Active Session",
    status: "Active"
  },
  {
    date: "04/29/2025 12:44:04 AM",
    user: "Smit Jani",
    email: "smit@smit.co.in",
    ip: "49.36.139.84",
    browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X ...",
    platform: "web",
    duration: "Active Session",
    status: "Active"
  },
  {
    date: "05/07/2025 3:54:57 PM",
    user: "Rupa Shukla",
    email: "rupa@gmail.com",
    ip: "106.200.2.181",
    browser: "Mozilla/5.0 (Windows NT 10.0; Win64; ...",
    platform: "web",
    duration: "17 seconds",
    status: "Logged Out"
  },
  {
    date: "05/07/2025 3:34:41 PM",
    user: "Karan Kumbhani",
    email: "karan.kumbhani@sahanasystem.com",
    ip: "49.36.137.20",
    browser: "Mozilla/5.0 (X11; Linux x86_64) AppleW...",
    platform: "web",
    duration: "1786 seconds",
    status: "Logged Out"
  },
  {
    date: "05/04/2025 5:04:09 PM",
    user: "Saif Malik",
    email: "saif.malik@gmail.com",
    ip: "106.219.146.40",
    browser: "Mozilla/5.0 (Windows NT 10.0; Win64; ...",
    platform: "web",
    duration: "Active Session",
    status: "Active"
  },
  {
    date: "05/07/2025 3:01:32 PM",
    user: "Alina Ali",
    email: "alinaali0119@gmail.com",
    ip: "203.190.139.18",
    browser: "Mozilla/5.0 (Windows NT 10.0; Win64; ...",
    platform: "web",
    duration: "1983 seconds",
    status: "Logged Out"
  },
];

const users = [
  "All Users",
  "NMW User 1",
  "aryan Balaji",
  "akshat goel",
  "Smit Jani",
  "Rupa Shukla",
  "Karan Kumbhani",
  "Saif Malik",
  "Alina Ali"
];

export default function UserLogsPage() {
  const [platform, setPlatform] = useState("All Platforms");
  const [user, setUser] = useState("All Users");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login Logs</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <input type="text" placeholder="Search logs..." className="border rounded px-3 py-2 text-sm w-full md:max-w-xs" />
        <div className="flex gap-2 flex-1">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} className="w-full border rounded px-2 py-2 text-sm">
              <option>All Platforms</option>
              <option>web</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">User</label>
            <select value={user} onChange={e => setUser(e.target.value)} className="w-full border rounded px-2 py-2 text-sm">
              {users.map(u => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded font-semibold">Clear</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Refresh</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold">Login Date</th>
              <th className="px-4 py-2 text-left font-semibold">User</th>
              <th className="px-4 py-2 text-left font-semibold">Email</th>
              <th className="px-4 py-2 text-left font-semibold">IP Address</th>
              <th className="px-4 py-2 text-left font-semibold">Browser</th>
              <th className="px-4 py-2 text-left font-semibold">Platform</th>
              <th className="px-4 py-2 text-left font-semibold">Duration</th>
              <th className="px-4 py-2 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 whitespace-nowrap">{row.date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.user}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.ip}</td>
                <td className="px-4 py-2">{row.browser}</td>
                <td className="px-4 py-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">{row.platform}</span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{row.duration}</td>
                <td className="px-4 py-2">
                  {row.status === "Active" ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                  ) : (
                    <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">Logged Out</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Pages 1 / 1 &nbsp; Total Data: 8</div>
          <div className="flex items-center gap-2">
            <span>Rows Per Page</span>
            <select className="border rounded px-1 py-0.5">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 rounded border bg-gray-100">Previous</button>
            <button className="px-2 py-1 rounded border bg-blue-600 text-white">1</button>
            <button className="px-2 py-1 rounded border bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
} 