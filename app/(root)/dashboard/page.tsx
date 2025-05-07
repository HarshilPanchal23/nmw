'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Select from "react-select";
import {ministries,Option} from "@/app/enum/ministry";


export default function DashboardPage() {
  const router = useRouter();
  const [selectedMinistry, setSelectedMinistry] = useState<Option | null>(null);
  // Redirect to login if not authenticated

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Select<Option>
          options={ministries}
          className="min-w-[300px]"
              value={selectedMinistry}
              onChange={(newValue) => setSelectedMinistry(newValue)}
              placeholder="Select Ministry"
            />
      </div>
      {/* Dashboard content skeleton here */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-500">Total News Footprint</div>
          <div className="text-2xl font-bold">423</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-500">Alert Past Hour</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-500">Majority Sentiment</div>
          <div className="text-lg font-semibold text-red-600">Negative (42.22%)</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-500">Social Media Reach</div>
          <div className="text-2xl font-bold">361</div>
        </div>
      </div>
      {/* Quick Actions and Alerts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Quick Actions - Responsive */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <div>
            <div className="font-semibold mb-2">Quick Actions</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="flex flex-col items-center bg-blue-50 text-blue-600 rounded-lg p-4 hover:bg-blue-100">
                <span className="material-icons text-3xl mb-1">warning</span>
                View Alerts
              </button>
              <button className="flex flex-col items-center bg-blue-50 text-blue-600 rounded-lg p-4 hover:bg-blue-100">
                <span className="material-icons text-3xl mb-1">description</span>
                Reports
              </button>
              <button className="flex flex-col items-center bg-blue-50 text-blue-600 rounded-lg p-4 hover:bg-blue-100">
                <span className="material-icons text-3xl mb-1">show_chart</span>
                View Trends
              </button>
              <button className="flex flex-col items-center bg-blue-50 text-blue-600 rounded-lg p-4 hover:bg-blue-100">
                <span className="material-icons text-3xl mb-1">autorenew</span>
                Media Analysis
              </button>
            </div>
          </div>
        </div>
        {/* Alerts section to the right of Quick Actions */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Alerts</div>
              <a href="#" className="text-blue-600 text-sm">View all</a>
            </div>
            <div className="flex gap-2 mb-2">
              <button className="bg-blue-600 text-white rounded px-2 py-1 text-xs">YT 0</button>
              <button className="bg-gray-200 text-gray-600 rounded px-2 py-1 text-xs">Print 3</button>
              <button className="bg-gray-200 text-gray-600 rounded px-2 py-1 text-xs">Online 1</button>
              <button className="bg-gray-200 text-gray-600 rounded px-2 py-1 text-xs">Social 2</button>
            </div>
            <div className="space-y-2 overflow-y-auto max-h-48">
              <div className="flex items-start gap-2 p-2 bg-red-50 rounded">
                <span className="material-icons text-red-500">warning</span>
                <div>
                  <div className="font-medium text-sm">Cashless Scheme Implemented Nationwide: Free Treatment up to ₹1.5 Lakh for Road Accident Victims</div>
                  <div className="text-xs text-gray-500">Navbharat Times</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-yellow-50 rounded">
                <span className="material-icons text-yellow-600">warning</span>
                <div>
                  <div className="font-medium text-sm">Army protests firing at LoC</div>
                  <div className="text-xs text-gray-500">Navbharat Times</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                <span className="material-icons text-blue-600">info</span>
                <div>
                  <div className="font-medium text-sm">Operation Sindoor: India's Revenge</div>
                  <div className="text-xs text-gray-500">Navbharat Times</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                <span className="material-icons text-green-600">check_circle</span>
                <div>
                  <div className="font-medium text-sm">Budget 2025: Major tax reforms expected</div>
                  <div className="text-xs text-gray-500">Economic Times</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main grid: Recent News & Trending side by side, then Recent Searches below Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Recent News and Trending side by side */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Recent News */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="font-semibold mb-2">Recent News</div>
            <div className="space-y-2 overflow-y-auto max-h-64 pr-1 custom-scrollbar">
              <div className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition">
                <div className="text-xs text-blue-600 font-bold">PRINT</div>
                <div className="font-semibold">Health crisis escalates</div>
                <div className="text-xs text-gray-500">Unknown</div>
              </div>
              <div className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition">
                <div className="text-xs text-blue-600 font-bold">PRINT</div>
                <div className="font-semibold">WAVES का समापन ...</div>
                <div className="text-xs text-gray-500">Unknown</div>
              </div>
              <div className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition">
                <div className="text-xs text-blue-600 font-bold">PRINT</div>
                <div className="font-semibold">New vaccine approved for emergency use</div>
                <div className="text-xs text-gray-500">Times Now</div>
              </div>
              <div className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition">
                <div className="text-xs text-blue-600 font-bold">PRINT</div>
                <div className="font-semibold">Budget 2025: Major tax reforms expected</div>
                <div className="text-xs text-gray-500">Economic Times</div>
              </div>
            </div>
            <div className="mt-2 text-right">
              <a href="#" className="text-blue-600 text-sm hover:underline">View all media</a>
            </div>
          </div>
          {/* Trending */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="font-semibold mb-2">Trending</div>
            <ol className="space-y-2">
              <li className="flex items-center gap-2 py-1 border-b last:border-b-0 font-medium text-indigo-600">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">1</span>
                Agriculture Budget 2025
              </li>
              <li className="flex items-center gap-2 py-1 border-b last:border-b-0 font-medium">
                <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">2</span>
                Animal Husbandry
              </li>
              <li className="flex items-center gap-2 py-1 border-b last:border-b-0 font-medium">
                <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">3</span>
                Ayush Conclave
              </li>
              <li className="flex items-center gap-2 py-1 border-b last:border-b-0 font-medium">
                <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">4</span>
                Fertilizer Production
              </li>
              <li className="flex items-center gap-2 py-1 font-medium">
                <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">5</span>
                Maha Kumbh Air Connectivity
              </li>
            </ol>
          </div>
        </div>
        {/* Right: Recent Searches below Alerts */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-semibold mb-2">Recent Searches</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-blue-600">search</span>
                  Healthcare Policy Coverage
                </div>
                <span className="bg-blue-100 text-blue-600 rounded px-2 text-xs">142 results</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-blue-600">search</span>
                  Budget Reactions
                </div>
                <span className="bg-blue-100 text-blue-600 rounded px-2 text-xs">87 results</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-blue-600">search</span>
                  Election Results
                </div>
                <span className="bg-blue-100 text-blue-600 rounded px-2 text-xs">54 results</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-blue-600">search</span>
                  Sports Achievements
                </div>
                <span className="bg-blue-100 text-blue-600 rounded px-2 text-xs">33 results</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-blue-600">search</span>
                  Technology Updates
                </div>
                <span className="bg-blue-100 text-blue-600 rounded px-2 text-xs">21 results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 