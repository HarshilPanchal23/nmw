'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Select from 'react-select';
import { ministries, Option } from '../enum/ministry';

interface News {
    id: number;
    title: string;
    description: string;
}

interface DriveItem {
    id: string;
    name: string;
    parentId: string | null;
    type: 'folder' | 'report';
    news?: number[];
    title?: string;
    description?: string;
}

// Mock News Data
const mockNews: News[] = [
    { id: 1, title: "News 1", description: "Description 1" },
    { id: 2, title: "News 2", description: "Description 2" },
    { id: 3, title: "News 3", description: "Description 3" },
];

// Helpers
function loadDrive(ministryId: string): DriveItem[] {
    const data = localStorage.getItem(`ministry_${ministryId}`);
    return data ? JSON.parse(data) : [];
}

function saveDrive(ministryId: string, data: DriveItem[]): void {
    localStorage.setItem(`ministry_${ministryId}`, JSON.stringify(data));
}

// ID Generator
const generateId = (): string => "_" + Math.random().toString(36).substr(2, 9);

export function WorkDrive({ isModal = false }: { isModal?: boolean }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [driveData, setDriveData] = useState<DriveItem[]>([]);
    const [selectedMinistry, setSelectedMinistry] = useState<Option | null>(ministries[2]);
    const [folderName, setFolderName] = useState("");
    const [report, setReport] = useState({ name: "", title: "", description: "" });
    const [showFolderModal, setShowFolderModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const [editMode, setEditMode] = useState<string | false>(false);

    const basePath = isModal ? "/media" : "/reports";
    const currentFolderId = searchParams.get('folderId') || null;
    const currentReportId = searchParams.get('reportId');

    useEffect(() => {
        if (selectedMinistry) {
            setDriveData(loadDrive(selectedMinistry.value.toString()));
        }
    }, [selectedMinistry]);

    const getCurrentItems = () => {
        return driveData.filter(item => item.parentId === currentFolderId);
    };

    const saveDriveAndUpdate = (updated: DriveItem[]) => {
        if (selectedMinistry) {
            saveDrive(selectedMinistry.value.toString(), updated);
            setDriveData(updated);
        }
    };

    const handleCreateFolder = () => {
        if (!folderName || !selectedMinistry) return;

        if (editMode) {
            const updated = driveData.map((item) =>
                item.id === editMode ? { ...item, name: folderName } : item
            );
            saveDriveAndUpdate(updated);
        } else {
            const newFolder: DriveItem = {
                id: generateId(),
                name: folderName,
                parentId: currentFolderId,
                type: "folder",
            };
            const updated = [...driveData, newFolder];
            saveDriveAndUpdate(updated);
        }

        setShowFolderModal(false);
        setFolderName("");
        setEditMode(false);
    };

    const handleCreateReport = () => {
        if (!report.name || !selectedMinistry) return;
        const selectedNews = JSON.parse(localStorage.getItem("selectedNews") || "[]");
        const newReport: DriveItem = {
            id: generateId(),
            name: report.name,
            title: report.title,
            description: report.description,
            parentId: currentFolderId,
            type: "report",
            news: selectedNews
        };
        const updated = [...driveData, newReport];
        saveDriveAndUpdate(updated);
        setShowReportModal(false);
        setReport({ name: "", title: "", description: "" });
        localStorage.removeItem("selectedNews");
    };

    const handleOpenItem = (item: DriveItem) => {
        if (item.type === "folder") {
            router.push(`${basePath}?folderId=${item.id}`);
        } else {
            router.push(`${basePath}?folderId=${item.id}&reportId=${item.id}`);
        }
    };

    const buildBreadcrumbs = () => {
        let breadcrumbs: DriveItem[] = [];
        let folder = driveData.find(item => item.id === currentFolderId);

        while (folder?.parentId) {
            breadcrumbs.unshift(folder);
            folder = driveData.find(item => item.id === folder?.parentId);
        }

        if (folder) {
            breadcrumbs.unshift(folder);
        }

        return breadcrumbs;
    };

    const handleAddNewsToReport = (report: DriveItem) => {
        const selectedNews = JSON.parse(localStorage.getItem("selectedNews") || "[]");
        const updatedReport = { ...report, news: [...(report.news || []), ...selectedNews] };
        const updatedDriveData = driveData.map(item =>
            item.id === report.id ? updatedReport : item
        );
        saveDriveAndUpdate(updatedDriveData);
        localStorage.removeItem("selectedNews");
    };

    const handleDelete = (id: string) => {
        const updatedDriveData = driveData.filter(item => item.id !== id);
        saveDriveAndUpdate(updatedDriveData);
    };

    const handleEdit = (id: string) => {
        const item = driveData.find(item => item.id === id);
        if (item) {
            setShowFolderModal(true);
            setEditMode(id);
            setFolderName(item.name);
        }
    };

    const breadcrumbs = buildBreadcrumbs();
    const currentItems = getCurrentItems();
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                {!isModal && <h1 className="text-2xl font-bold">Reports</h1>}
                <Select<Option>
                    options={ministries.filter((m: Option) => m.value !== 1)}
                    className={!isModal ? "min-w-[300px]" : "w-full"}
                    value={selectedMinistry}
                    onChange={(newValue) => setSelectedMinistry(newValue)}
                    placeholder="Select Ministry"
                />
            </div>



            {selectedMinistry ? <>
                <div className="flex items-center justify-between mb-6 mt-2">
                    <nav className="flex items-center space-x-2 flex-wrap max-w-[60%]">
                        <button
                            onClick={() => router.push(basePath)}
                            className="text-blue-600 hover:text-blue-800 max-w-[200px] text-nowrap text-ellipsis overflow-hidden font-semibold"
                        >
                            {selectedMinistry?.label || 'Select Ministry'}
                        </button>
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={crumb.id}>
                                <span className="text-gray-500">/</span>
                                <button
                                    onClick={() => crumb.type === "folder" && router.push(`${basePath}?folderId=${crumb.id}`)}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    {crumb.name}
                                </button>
                            </React.Fragment>
                        ))}
                    </nav>
                    {!currentReportId && (
                        <div className="flex space-x-4">
                            <button
                                onClick={() => { setEditMode(false); setShowFolderModal(true) }}
                                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Create Folder
                            </button>
                            <button
                                onClick={() => setShowReportModal(true)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Create Report
                            </button>
                        </div>
                    )}
                </div>

                {currentReportId ? (
                    <Report selectedMinistry={selectedMinistry} />
                ) : (
                    <>
                        <hr className="my-4" />
                        <div className="mt-4 p-4 bg-white rounded-lg shadow">
                            <ul className="divide-y divide-gray-200">
                                {!currentItems.length && <li className="py-4 text-gray-500">No items available</li>}
                                {currentItems.map((item) => (
                                    <li key={item.id} className="py-4 flex items-center justify-between">
                                        <button
                                            onClick={() => handleOpenItem(item)}
                                            className="flex items-center space-x-2 text-gray-900 hover:text-blue-600"
                                        >
                                            <span className="material-icons">
                                                {item.type === "folder" ? "folder" : "description"}
                                            </span>
                                            <span className="font-semibold">{item.name}</span>
                                        </button>
                                        <div className="flex space-x-2">
                                            {item.type === "report" && (
                                                <button
                                                    onClick={() => handleAddNewsToReport(item)}
                                                    disabled={!localStorage.getItem("selectedNews")}
                                                    className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Add News
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleEdit(item.id)}
                                                className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="px-3 py-1 text-red-600 hover:bg-red-50 rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </>: <div className='flex items-center justify-center text-3xl min-h-[200px]'>
                  No mininstry selected!
                </div>}


            {/* Folder Modal */}
            {showFolderModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowFolderModal(false)}></div>
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {editMode ? "Edit Folder" : "Create Folder"}
                                </h3>
                            </div>
                            <div className="p-6">
                                <input
                                    type="text"
                                    value={folderName}
                                    onChange={(e) => setFolderName(e.target.value)}
                                    placeholder="Folder Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                                <button
                                    onClick={handleCreateFolder}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    {editMode ? "Save" : "Create"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Report Modal */}
            {showReportModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowReportModal(false)}></div>
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">Create Report</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <input
                                    type="text"
                                    value={report.name}
                                    onChange={(e) => setReport({ ...report, name: e.target.value })}
                                    placeholder="Report Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    value={report.title}
                                    onChange={(e) => setReport({ ...report, title: e.target.value })}
                                    placeholder="Title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    value={report.description}
                                    onChange={(e) => setReport({ ...report, description: e.target.value })}
                                    placeholder="Description"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={4}
                                />
                            </div>
                            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                                <button
                                    onClick={handleCreateReport}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Report({ selectedMinistry }: { selectedMinistry: Option | null }) {
    const searchParams = useSearchParams();
    const reportId = searchParams.get('reportId');
    const driveData = selectedMinistry ? loadDrive(selectedMinistry.value.toString()) : [];
    const report = driveData.find(item => item.id === reportId);

    if (!report) return <div>Report not found</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{report.title}</h1>
            <p className="text-gray-600 mb-8">{report.description}</p>
            <h2 className="text-xl font-semibold mb-4">Selected News:</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">News ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {report.news?.map((id) => {
                            const item = mockNews.find((n) => n.id === id);
                            return item ? (
                                <tr key={id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                                </tr>
                            ) : null;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


