"use client";
import Pagination from "@/app/components/elements/Pagination";
import DynamicTable, { Column } from "@/app/components/elements/Table";
import { createPublication, getPublcation, editPublication, deletePublication } from "@/app/service/publication.api";
import React, { useState, useEffect } from "react";

const columns: Column[] = [
  { columnKey: "publication_name", columnLabel: "Publication Name" },
];

const actions = (row: any) => (
  <div className="flex gap-2">
    <span className="material-icons text-gray-500 cursor-pointer">edit</span>
    <span className="material-icons text-red-500 cursor-pointer">delete</span>
  </div>
);

const tableData = [
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
  const [editIdx, setEditIdx] = useState<number>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);
  const [publications, setPublications] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true); const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageinfo, setPageinfo] = useState({
    total_count: 1
  });
  const [searchValue, setSearchValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for form submission

  useEffect(() => {
    fetchData();
  }, [pageNumber, pageSize, searchValue]);

  const fetchData = async () => {
    try {
      setFetchLoading(true);
      const response = await getPublcation(pageNumber, pageSize, 'id', 'asc', searchValue);
      if (response.status === 200) {
        const responseData = response.data;
        console.log("responseData", responseData)
        setPublications(responseData.items)
        setPageinfo(responseData.page_info)
        setFetchLoading(false)
      }
      else {
        setError("Unexpected response structure");
        setFetchLoading(false)
        console.error("Invalid response:", response);
      }
    } catch (err) {
      setError("Failed to load publications");
      console.error(err);
    }
  };

  const handleEdit = (row) => {
    console.log(row)
    setEditIdx(row.id);
    setPub(row.publication_name);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (row) => {
    setDeleteIdx(row.id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (deleteIdx !== null) {
      try {
        setIsSubmitting(true);
        const response = await deletePublication(deleteIdx);
        if (response.status === 200) {
          setDeleteIdx(null);
          setShowDeleteModal(false);
          fetchData();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleSubmit = async () => {
    if (!pub.trim()) return;
    try {
      setIsSubmitting(true);
      if (isEditMode && editIdx !== null) {
        const response = await editPublication(editIdx, { publication_name: pub });
        if (response.status === 200) {
          setPub("");
          setIsEditMode(false);
          setShowModal(false);
          setIsSubmitting(false);
          fetchData();
        }
      } else {
        const response = await createPublication({ publication_name: pub });
        if (response.status === 201) {
          setPub("");
          setShowModal(false);
          setIsSubmitting(false);
          fetchData();
        }
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
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
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold cursor-pointer">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center min-w-[80px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                ) : null}
                {isSubmitting ? (isEditMode ? "Updating..." : "Adding...") : (isEditMode ? "Update" : "Add")}
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
              {/* <span className="font-bold">{publications[deleteIdx].publication_name}</span>?<br /> */}
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold cursor-pointer"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-6 py-2 rounded font-semibold disabled:bg-red-400 disabled:cursor-not-allowed flex items-center justify-center min-w-[80px] cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                ) : null}
                {isSubmitting ? "Deleting..." : "Delete"}
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
            onChange={(e) => setSearchValue(e.target.value)}
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
        <div className="py-2 rounded-lg bg-white shadow">
          {fetchLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : publications.length === 0 ? (
            <div className="flex justify-center items-center h-64 text-gray-500 text-4xl">
              No data available
            </div>
          ) : (
            <>
              <DynamicTable
                tableData={publications}
                columns={columns}
                rowActions={(row) => (
                  <div className="flex gap-2">
                    <span
                      className="material-icons text-yellow-600 cursor-pointer"
                      onClick={() => handleEdit(row)}
                    >
                      edit
                    </span>
                    <span
                      className="material-icons text-red-500 cursor-pointer"
                      onClick={() => handleDelete(row)}
                    >
                      delete
                    </span>
                  </div>
                )}
              />
              <div className="flex px-4 pt-2 justify-end">
                <Pagination
                  currentPage={pageNumber}
                  totalPages={Math.ceil(pageinfo.total_count / pageSize)}
                  onPageSize={setPageSize}
                  pageSize={pageSize}
                  onPageChange={(e) => setPageNumber(e)}
                />
              </div>
            </>
          )}
        </div>
      </div>   
     </div>
  );
}

