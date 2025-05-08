'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { WorkDrive } from "@/app/components/Draft";

function AddToDraft({isOpen, setIsOpen}:{isOpen:boolean, setIsOpen:any}) {
  const router = useRouter();
  const handleClose = () => {
    setIsOpen(false);

  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-50 opacity-55 transition-opacity" onClick={handleClose}></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900">Add to Draft</h3>
            <button
              onClick={handleClose}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          {/* Content */}
          <div className="p-6 min-h-[400px]">
            <WorkDrive isModal={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToDraft;