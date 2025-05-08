'use client'
import React, { useState } from "react";

const ministryList = [
  "Ministry of Defence",
  "Ministry of Education",
  "Ministry of Finance",
  "Ministry of Labour and Employment",
  "Ministry of Law and Justice"
];

const initialAlerts = [
  {
    ministry: "Ministry of Defence",
    critical: ["PoK", "jammu", "Attack", "terror attack", "army", "risk", "pakistan", "defence", "MoD", "kill", "deal"],
    high: ["Risk", "pahalgam", "indian"],
    low: ["Rozgar", "PM", "jobs"],
    lastUpdated: "07/05/2025, 12:33:43"
  },
  {
    ministry: "Ministry of Education",
    critical: [],
    high: ["toraborah", "readers", "crore"],
    low: [],
    lastUpdated: ""
  },
  {
    ministry: "Ministry of Finance",
    critical: ["loan", "fraud", "National Herald", "notice"],
    high: [],
    low: [],
    lastUpdated: "07/05/2025, 11:46:31"
  },
  {
    ministry: "Ministry of Labour and Employment",
    critical: ["Rozgar", "PM", "jobs"],
    high: [],
    low: [],
    lastUpdated: "03/05/2025, 13:08:13"
  },
  {
    ministry: "Ministry of Law and Justice",
    critical: ["Bar", "notice"],
    high: [],
    low: [],
    lastUpdated: "03/05/2025, 13:10:08"
  },
];

const priorityColor: Record<string, string> = {
  Critical: "bg-red-100 text-red-600",
  High: "bg-yellow-100 text-yellow-700",
  Low: "bg-yellow-100 text-yellow-500"
};

export default function MinistryAlertPage() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [ministry, setMinistry] = useState("");
  const [critical, setCritical] = useState<string[]>([]);
  const [high, setHigh] = useState<string[]>([]);
  const [low, setLow] = useState<string[]>([]);
  const [criticalInput, setCriticalInput] = useState("");
  const [highInput, setHighInput] = useState("");
  const [lowInput, setLowInput] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  const openAddModal = () => {
    setIsEditing(false);
    setEditIdx(null);
    setMinistry("");
    setCritical([]);
    setHigh([]);
    setLow([]);
    setCriticalInput("");
    setHighInput("");
    setLowInput("");
    setModalOpen(true);
  };

  const openEditModal = (idx: number) => {
    const alert = alerts[idx];
    setIsEditing(true);
    setEditIdx(idx);
    setMinistry(alert.ministry);
    setCritical(alert.critical || []);
    setHigh(alert.high || []);
    setLow(alert.low || []);
    setCriticalInput("");
    setHighInput("");
    setLowInput("");
    setModalOpen(true);
  };

  const handleAddKeyword = (type: 'critical' | 'high' | 'low') => {
    if (type === 'critical' && criticalInput.trim()) {
      setCritical([...critical, criticalInput.trim()]);
      setCriticalInput("");
    } else if (type === 'high' && highInput.trim()) {
      setHigh([...high, highInput.trim()]);
      setHighInput("");
    } else if (type === 'low' && lowInput.trim()) {
      setLow([...low, lowInput.trim()]);
      setLowInput("");
    }
  };

  const handleRemoveKeyword = (type: 'critical' | 'high' | 'low', idx: number) => {
    if (type === 'critical') setCritical(critical.filter((_, i) => i !== idx));
    if (type === 'high') setHigh(high.filter((_, i) => i !== idx));
    if (type === 'low') setLow(low.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    if (!ministry) return;
    const newAlert = {
      ministry,
      critical,
      high,
      low,
      lastUpdated: new Date().toLocaleString()
    };
    if (isEditing && editIdx !== null) {
      setAlerts(prev => prev.map((a, i) => i === editIdx ? newAlert : a));
    } else {
      setAlerts(prev => [...prev, newAlert]);
    }
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{isEditing ? 'Edit Alert Keywords' : 'Add Alert Keywords'}</h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-icons">close</span>
              </button>
            </div>
            <label className="mb-1 font-medium">Select Ministry</label>
            <select
              className="border rounded px-3 py-2 mb-4"
              value={ministry}
              onChange={e => setMinistry(e.target.value)}
            >
              <option value="">Select Ministry</option>
              {ministryList.map((m, i) => (
                <option key={i} value={m}>{m}</option>
              ))}
            </select>
            {/* Critical Priority */}
            <div className="mb-4 p-3 rounded border border-red-200 bg-red-50">
              <label className="mb-1 font-semibold text-red-700 block">Critical Priority Keywords</label>
              <div className="flex gap-2 mb-2">
                <input
                  className="border rounded px-3 py-2 flex-1 bg-white"
                  value={criticalInput}
                  onChange={e => setCriticalInput(e.target.value)}
                  placeholder="Add critical keyword"
                />
                <button type="button" className="bg-red-400 hover:bg-red-500 text-white px-3 py-2 rounded" onClick={() => handleAddKeyword('critical')}>+</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {critical.map((kw, i) => (
                  <span key={i} className="bg-red-100 text-red-700 rounded px-2 py-0.5 text-xs flex items-center gap-1">{kw} <span className="material-icons text-xs cursor-pointer" onClick={() => handleRemoveKeyword('critical', i)}>close</span></span>
                ))}
              </div>
            </div>
            {/* High Priority */}
            <div className="mb-4 p-3 rounded border border-yellow-200 bg-yellow-50">
              <label className="mb-1 font-semibold text-yellow-700 block">High Priority Keywords</label>
              <div className="flex gap-2 mb-2">
                <input
                  className="border rounded px-3 py-2 flex-1 bg-white"
                  value={highInput}
                  onChange={e => setHighInput(e.target.value)}
                  placeholder="Add high priority keyword"
                />
                <button type="button" className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded" onClick={() => handleAddKeyword('high')}>+</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {high.map((kw, i) => (
                  <span key={i} className="bg-yellow-100 text-yellow-700 rounded px-2 py-0.5 text-xs flex items-center gap-1">{kw} <span className="material-icons text-xs cursor-pointer" onClick={() => handleRemoveKeyword('high', i)}>close</span></span>
                ))}
              </div>
            </div>
            {/* Low Priority */}
            <div className="mb-6 p-3 rounded border border-yellow-100 bg-yellow-50">
              <label className="mb-1 font-semibold text-yellow-700 block">Low Priority Keywords</label>
              <div className="flex gap-2 mb-2">
                <input
                  className="border rounded px-3 py-2 flex-1 bg-white"
                  value={lowInput}
                  onChange={e => setLowInput(e.target.value)}
                  placeholder="Add low priority keyword"
                />
                <button type="button" className="bg-yellow-300 hover:bg-yellow-400 text-white px-3 py-2 rounded" onClick={() => handleAddKeyword('low')}>+</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {low.map((kw, i) => (
                  <span key={i} className="bg-yellow-100 text-yellow-700 rounded px-2 py-0.5 text-xs flex items-center gap-1">{kw} <span className="material-icons text-xs cursor-pointer" onClick={() => handleRemoveKeyword('low', i)}>close</span></span>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setModalOpen(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold">Cancel</button>
              <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded font-semibold" disabled={!ministry}> {isEditing ? 'Update' : 'Add'} </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">Ministry Alert</h1>
        <div className="flex justify-end gap-2 items-center mb-4">
          <input
            type="text"
            placeholder="Search ministry"
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
              <th className="px-4 py-2 text-left font-semibold">Ministry Name</th>
              <th className="px-4 py-2 text-left font-semibold">Critical</th>
              <th className="px-4 py-2 text-left font-semibold">High</th>
              <th className="px-4 py-2 text-left font-semibold">Low</th>
              <th className="px-4 py-2 text-left font-semibold">Last Updated</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 align-top">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">{row.ministry}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-1">
                    {row.critical.map((kw, i) => (
                      <span key={i} className="bg-red-100 text-red-700 rounded px-2 py-0.5 text-xs">{kw}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-1">
                    {row.high.map((kw, i) => (
                      <span key={i} className="bg-yellow-100 text-yellow-700 rounded px-2 py-0.5 text-xs">{kw}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-1">
                    {row.low.map((kw, i) => (
                      <span key={i} className="bg-yellow-100 text-yellow-700 rounded px-2 py-0.5 text-xs">{kw}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{row.lastUpdated}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <span className="material-icons text-yellow-600 cursor-pointer" onClick={() => openEditModal(idx)}>edit</span>
                    <span className="material-icons text-red-500 cursor-pointer" onClick={() => { setDeleteIdx(idx); setShowDeleteModal(true); }}>delete</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Alert Keywords Modal */}
      {showDeleteModal && deleteIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
              onClick={() => setShowDeleteModal(false)}
            >
              &times;
            </button>
            <div className="flex items-center mb-3">
              <span className="material-icons text-red-500 mr-2 text-2xl">warning</span>
              <h2 className="text-xl font-bold">Delete Alert Keywords</h2>
            </div>
            <p className="mb-6">
              Are you sure you want to delete all alert keywords for <b>{alerts[deleteIdx].ministry}</b>? This action cannot be undone.
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
                  setAlerts(alerts.filter((_, i) => i !== deleteIdx));
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