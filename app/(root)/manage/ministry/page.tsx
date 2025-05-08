'use client';
import Pagination from '@/app/components/elements/Pagination';
import DynamicTable, { Column } from '@/app/components/elements/Table';
import React, { useState } from 'react';

type keyword = string[]
interface initialMinistries {
  name: string;
  keywords: keyword;
}




const initialMinistries: initialMinistries[] = [
  {
    name: 'Ministry of Defence',
    keywords: ['army', 'defence', 'border', 'MoD']
  },
  {
    name: 'Ministry of Education',
    keywords: ['school', 'university', 'education', 'students']
  },
  {
    name: 'Ministry of Finance',
    keywords: ['budget', 'tax', 'finance', 'economy']
  }
];


const columns: Column[] = [
  { columnKey: "name", columnLabel: "Ministry Name", isSticky: true },
  {
    columnKey: "keywords", columnLabel: "Headline",
    render: (value: keyword) => <div className="flex gap-2 flex-wrap">
      {
        value.map((kw, i) => (
          <span key={i} className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs">{kw}</span>
        ))
      }
    </div>

  }
];


const ministryOptions = [
  'Ministry of Defence',
  'Ministry of Education',
  'Ministry of Finance',
  'Ministry of Labour and Employment',
  'Ministry of Law and Justice',
  'Ministry of Health and Family Welfare',
  'Ministry of Home Affairs',
  'Ministry of External Affairs',
  'Ministry of Agriculture',
  'Ministry of Environment, Forest and Climate Change',
  'Ministry of Science and Technology',
  'Ministry of Women and Child Development',
  'Ministry of Social Justice and Empowerment',
  'Ministry of Tribal Affairs',
  'Ministry of Power',
  'Ministry of Railways',
  'Ministry of Road Transport and Highways',
  'Ministry of Skill Development and Entrepreneurship',
  'Ministry of Youth Affairs and Sports',
  'Ministry of Tourism',
  'Ministry of Culture',
  'Ministry of Information and Broadcasting',
  'Ministry of Electronics and Information Technology',
  'Ministry of Petroleum and Natural Gas',
  'Ministry of Civil Aviation',
  'Ministry of Shipping',
  'Ministry of Textiles',
  'Ministry of Commerce and Industry',
  'Ministry of Corporate Affairs',
  'Ministry of Law and Justice',
];

export default function MinistryPage() {
  const [ministries, setMinistries] = useState(initialMinistries);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [ministryName, setMinistryName] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const openAddModal = () => {
    setIsEditing(false);
    setEditIdx(null);
    setMinistryName('');
    setKeywords([]);
    setKeywordInput('');
    setModalOpen(true);
  };

  const openEditModal = (idx: number) => {
    const ministry = ministries[idx];
    setIsEditing(true);
    setEditIdx(idx);
    setMinistryName(ministry.name);
    setKeywords(ministry.keywords);
    setKeywordInput('');
    setModalOpen(true);
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const handleRemoveKeyword = (idx: number) => {
    setKeywords(keywords.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    if (!ministryName.trim()) return;
    const newMinistry = {
      name: ministryName.trim(),
      keywords
    };
    if (isEditing && editIdx !== null) {
      setMinistries(prev => prev.map((m, i) => i === editIdx ? newMinistry : m));
    } else {
      setMinistries(prev => [...prev, newMinistry]);
    }
    setModalOpen(false);
  };

  const openDeleteModal = (idx: number) => {
    setDeleteIdx(idx);
    setDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (deleteIdx !== null) {
      setMinistries(prev => prev.filter((_, i) => i !== deleteIdx));
      setDeleteIdx(null);
      setDeleteModalOpen(false);
    }
  };

  return (
    <div>
      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{isEditing ? 'Edit Ministry' : 'Add Ministry'}</h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-icons">close</span>
              </button>
            </div>
            <label className="mb-1 font-medium">Ministry Name <span className="text-red-500">*</span></label>
            <select
              className="border rounded px-3 py-2 mb-4 bg-white"
              value={ministryName}
              onChange={e => setMinistryName(e.target.value)}
            >
              <option value="">Select Ministry</option>
              {ministryOptions.map((option, i) => (
                <option key={i} value={option}>{option}</option>
              ))}
            </select>
            <label className="mb-1 font-medium">Keywords</label>
            <div className="flex gap-2 mb-2">
              <input
                className="border rounded px-3 py-2 flex-1 bg-white"
                value={keywordInput}
                onChange={e => setKeywordInput(e.target.value)}
                placeholder="Add keyword"
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddKeyword(); } }}
              />
              <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded" onClick={handleAddKeyword}>+</button>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {keywords.map((kw, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs flex items-center gap-1">{kw} <span className="material-icons text-xs cursor-pointer" onClick={() => handleRemoveKeyword(i)}>close</span></span>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setModalOpen(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold">Cancel</button>
              <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold" disabled={!ministryName.trim()}>{isEditing ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Modal */}
      {deleteModalOpen && deleteIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">
            <h2 className="text-xl font-bold mb-4">Delete Ministry</h2>
            <p className="mb-4">Are you sure you want to delete <span className="font-bold">{ministries[deleteIdx].name}</span>?<br />This action cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDeleteModalOpen(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold">Cancel</button>
              <button onClick={handleDelete} className="bg-red-500 text-white px-6 py-2 rounded font-semibold">Delete</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">Ministry</h1>
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
      {/* Table */}
      <div className="py-2 rounded-lg  bg-white shadow">
        <DynamicTable tableData={ministries} columns={columns} rowActions={(row: initialMinistries, idx: number) =>
          <div className="flex gap-2">
            <span className="material-icons text-yellow-600 cursor-pointer" onClick={() => openEditModal(idx)}>edit</span>
            <span className="material-icons text-red-500 cursor-pointer" onClick={() => openDeleteModal(idx)}>delete</span>
          </div>
        } />
        <div className="flex  px-4 pt-2 justify-end">
          <Pagination
            currentPage={1}
            onPageChange={() => { }}
            onPageSize={() => { }}
            pageSize={5}
            totalPages={10}
          />
        </div>
      </div>

    </div>
  );
}
