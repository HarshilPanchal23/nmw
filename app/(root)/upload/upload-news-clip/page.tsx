'use client'
import React, { useState, useCallback } from "react";
import Select from 'react-select';
import { useDropzone } from 'react-dropzone';
import { ministries,Option } from "@/app/enum/ministry";



interface UploadedFile {
  name: string;
  size: number;
  type: string;
  preview?: string;
}



const publications: Option[] = [
  { value: 'financial_express', label: 'Financial Express' },
  { value: 'times_of_india', label: 'Times of India' },
  { value: 'hindustan_times', label: 'Hindustan Times' },
  { value: 'the_hindu', label: 'The Hindu' },
  { value: 'indian_express', label: 'Indian Express' }
];

const editions: Option[] = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'kolkata', label: 'Kolkata' }
];

const zones: Option[] = [
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'central', label: 'Central' }
];

export default function UploadNewsClipPage() {
  const [selectedMinistry, setSelectedMinistry] = useState<Option | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<Option | null>(null);
  const [selectedEdition, setSelectedEdition] = useState<Option | null>(null);
  const [selectedZone, setSelectedZone] = useState<Option | null>(null);
  const [pageNumber, setPageNumber] = useState('');
  const [clipDate, setClipDate] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      preview: URL.createObjectURL(file)
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleSubmit = async () => {
    if (!selectedMinistry || !selectedPublication || !selectedEdition || !selectedZone) {
      alert('Please fill in all required fields');
      return;
    }

    if (!pageNumber || !clipDate) {
      alert('Please fill in page number and clip date');
      return;
    }

    if (uploadedFiles.length === 0) {
      alert('Please upload at least one file');
      return;
    }

    setIsUploading(true);
    try {
      // TODO: Replace with actual API call
      // const formData = new FormData();
      // formData.append('ministry', selectedMinistry.value);
      // formData.append('publication', selectedPublication.value);
      // formData.append('edition', selectedEdition.value);
      // formData.append('zone', selectedZone.value);
      // formData.append('pageNumber', pageNumber);
      // formData.append('clipDate', clipDate);
      // uploadedFiles.forEach(file => {
      //   formData.append('files', file);
      // });
      // const response = await fetch('/api/upload-clip', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();
      // console.log('Upload successful:', data);
      
      // Clear form after successful upload
      setSelectedMinistry(null);
      setSelectedPublication(null);
      setSelectedEdition(null);
      setSelectedZone(null);
      setPageNumber('');
      setClipDate('');
      setUploadedFiles([]);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    setSelectedMinistry(null);
    setSelectedPublication(null);
    setSelectedEdition(null);
    setSelectedZone(null);
    setPageNumber('');
    setClipDate('');
    setUploadedFiles([]);
  };

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4">Upload Clips</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ministry</label>
            <Select<Option>
              options={ministries}
              value={selectedMinistry}
              onChange={(newValue) => setSelectedMinistry(newValue)}
              placeholder="Select Ministry"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Publication</label>
            <Select<Option>
              options={publications}
              value={selectedPublication}
              onChange={(newValue) => setSelectedPublication(newValue)}
              placeholder="Select News Source"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Edition</label>
            <Select<Option>
              options={editions}
              value={selectedEdition}
              onChange={(newValue) => setSelectedEdition(newValue)}
              placeholder="Select Edition"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">CCM</label>
            <input className="w-full border rounded px-2 py-2 text-sm" value="N/A" readOnly />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Zone</label>
            <Select<Option>
              options={zones}
              value={selectedZone}
              onChange={(newValue) => setSelectedZone(newValue)}
              placeholder="Select Zone"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Page Number</label>
            <input 
              className="w-full border rounded px-2 py-2 text-sm" 
              placeholder="Enter page number"
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Clip Date</label>
            <input 
              className="w-full border rounded px-2 py-2 text-sm" 
              placeholder="dd/mm/yyyy" 
              type="date"
              value={clipDate}
              onChange={(e) => setClipDate(e.target.value)}
            />
          </div>
        </div>
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center py-16 mb-6 text-center text-gray-500 ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <span className="material-icons text-5xl mb-2 text-gray-400">cloud_upload</span>
          <div className="mb-2">
            {isDragActive ? (
              <span>Drop the files here...</span>
            ) : (
              <>
                <span>Drag and drop your news clips here</span>
                <div className="mb-2">or</div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold mb-2">Browse Files</button>
              </>
            )}
          </div>
          <div className="text-xs text-gray-400">PNG files only, max 5MB each</div>
        </div>
        {uploadedFiles.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Uploaded Files:</h3>
            <ul className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end gap-2">
          <button 
            className="bg-gray-200 text-gray-500 px-6 py-2 rounded font-semibold"
            onClick={handleClear}
            disabled={isUploading}
          >
            Clear
          </button>
          <button 
            className="bg-blue-400 text-white px-6 py-2 rounded font-semibold"
            onClick={handleSubmit}
            disabled={isUploading || !selectedMinistry || !selectedPublication || !selectedEdition || !selectedZone || !pageNumber || !clipDate || uploadedFiles.length === 0}
          >
            {isUploading ? 'Uploading...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
} 