'use client'
import React, { useState, useCallback } from "react";
import Select, { MultiValue, ActionMeta } from 'react-select';
import { useDropzone } from 'react-dropzone';
import { Option } from "@/app/enum/ministry";



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

const languages: Option[] = [
  { value: 'eng', label: 'English' },
  { value: 'hin', label: 'Hindi' },
  { value: 'mar', label: 'Marathi' },
  { value: 'guj', label: 'Gujarati' },
  { value: 'ben', label: 'Bengali' }
];

export default function UploadNewsPaperPage() {
  const [selectedPublication, setSelectedPublication] = useState<Option | null>(null);
  const [selectedEdition, setSelectedEdition] = useState<Option | null>(null);
  const [selectedZone, setSelectedZone] = useState<Option | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Option | null>(null);
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
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxSize: 20 * 1024 * 1024, // 20MB
  });

  const handleSubmit = async () => {
    if (!selectedPublication || !selectedEdition || !selectedZone || !selectedLanguage) {
      alert('Please fill in all required fields');
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
      // formData.append('publication', selectedPublication.value);
      // formData.append('edition', selectedEdition.value);
      // formData.append('zone', selectedZone.value);
      // formData.append('language', selectedLanguage.value);
      // uploadedFiles.forEach(file => {
      //   formData.append('files', file);
      // });
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();
      // console.log('Upload successful:', data);
      
      // Clear form after successful upload
      setSelectedPublication(null);
      setSelectedEdition(null);
      setSelectedZone(null);
      setSelectedLanguage(null);
      setUploadedFiles([]);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    setSelectedPublication(null);
    setSelectedEdition(null);
    setSelectedZone(null);
    setSelectedLanguage(null);
    setUploadedFiles([]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Newspaper</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Publication</label>
            <Select<Option>
              options={publications}
              value={selectedPublication}
              onChange={(newValue) => setSelectedPublication(newValue)}
              placeholder="Select Publication"
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
            <label className="block text-xs text-gray-500 mb-1">Zone</label>
            <Select<Option>
              options={zones}
              value={selectedZone}
              onChange={(newValue) => setSelectedZone(newValue)}
              placeholder="Select Zone"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <Select<Option>
              options={languages}
              value={selectedLanguage}
              onChange={(newValue) => setSelectedLanguage(newValue)}
              placeholder="Select Language"
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
                <span>Drag and drop files here</span>
                <div className="mb-2">or</div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold mb-2">Browse Files</button>
              </>
            )}
          </div>
          <div className="text-xs text-gray-400">Maximum file size: 20MB</div>
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
            disabled={isUploading || !selectedPublication || !selectedEdition || !selectedZone || !selectedLanguage || uploadedFiles.length === 0}
          >
            {isUploading ? 'Uploading...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
} 