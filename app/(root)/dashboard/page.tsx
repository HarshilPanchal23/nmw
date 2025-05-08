'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Select from "react-select";
import { ministries, Option } from "@/app/enum/ministry";

export default function DashboardPage() {
  const router = useRouter();
  const [selectedMinistry, setSelectedMinistry] = useState<Option | null>(null);

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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total News Footprint", value: 423 },
          { label: "Alert Past Hour", value: 0 },
          { label: "Majority Sentiment", value: "Negative (42.22%)", color: "text-red-600" },
          { label: "Social Media Reach", value: 361 },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="text-xs text-gray-500">{item.label}</div>
            <div className={`text-2xl font-bold ${item.color ?? ""}`}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Quick Actions + News & Trends */}
        <div className="lg:col-span-2 space-y-4">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-semibold mb-2">Quick Actions</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "warning", label: "View Alerts", path: "/news-alerts" },
              { icon: "description", label: "Reports", path: "/reports" },
              { icon: "show_chart", label: "View Trends", path: "/trends" },
              { icon: "autorenew", label: "Media Analysis", path: "/media" },
            ].map((action, i) => (
            <a key={i} href={action.path} className="no-underline">
                <button className="w-full flex flex-col items-center bg-blue-50 text-blue-600 rounded-lg p-4 hover:bg-blue-100 cursor-pointer">
                  <span className="material-icons text-3xl mb-1">{action.icon}</span>
                  {action.label}
                </button>
              </a>
            ))}
  </div>
          </div>

          {/* News & Trending */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Recent News */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold mb-2">Recent News</div>
              <div className="space-y-2 overflow-y-auto max-h-64 pr-1 custom-scrollbar">
                {[
                  { title: "Health crisis escalates", source: "Unknown" },
                  { title: "WAVES का समापन ...", source: "Unknown" },
                  { title: "New vaccine approved for emergency use", source: "Times Now" },
                  { title: "Budget 2025: Major tax reforms expected", source: "Economic Times" },
                ].map((news, i) => (
                  <div
                    key={i}
                    className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div className="text-xs text-blue-600 font-bold">PRINT</div>
                    <div className="font-semibold">{news.title}</div>
                    <div className="text-xs text-gray-500">{news.source}</div>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-center">
                <a href="/media" className="text-blue-600 text-sm hover:underline">
                  View all media
                </a>
              </div>
            </div>

            {/* Trending */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-semibold mb-2">Trending</div>
              <ol className="space-y-2">
                {[
                  "Agriculture Budget 2025",
                  "Animal Husbandry",
                  "Ayush Conclave",
                  "Fertilizer Production",
                  "Maha Kumbh Air Connectivity",
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 py-1 border-b last:border-b-0 font-medium ${
                      i === 0 ? "text-indigo-600" : ""
                    }`}
                  >
                    <span
                      className={`inline-block w-6 h-6 rounded-full ${
                        i === 0 ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-700"
                      } flex items-center text-center justify-center font-bold`}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Right: Alerts + Recent Searches */}
        <div className="space-y-4">
          {/* Alerts */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Alerts</div>
              <a href="#" className="text-blue-600 text-sm">View all</a>
            </div>

            <div className="flex gap-2 mb-2">
              {["YT 0", "Print 3", "Online 1", "Social 2"].map((type, i) => (
                <button
                  key={i}
                  className={`${
                    i === 0
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } rounded px-2 py-1 text-xs`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-2 overflow-y-auto max-h-48">
              {[
                {
                  level: "danger",
                  icon: "warning",
                  text: "Cashless Scheme Implemented Nationwide: Free Treatment up to ₹1.5 Lakh for Road Accident Victims",
                  source: "Navbharat Times",
                },
                {
                  level: "warning",
                  icon: "warning",
                  text: "Army protests firing at LoC",
                  source: "Navbharat Times",
                },
                {
                  level: "info",
                  icon: "info",
                  text: "Operation Sindoor: India's Revenge",
                  source: "Navbharat Times",
                },
                {
                  level: "success",
                  icon: "check_circle",
                  text: "Budget 2025: Major tax reforms expected",
                  source: "Economic Times",
                },
              ].map((alert, i) => {
                const colors = {
                  danger: "bg-red-50 text-red-500",
                  warning: "bg-yellow-50 text-yellow-600",
                  info: "bg-blue-50 text-blue-600",
                  success: "bg-green-50 text-green-600",
                };
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2 p-2 rounded ${colors[alert.level]}`}
                  >
                    <span className="material-icons">{alert.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{alert.text}</div>
                      <div className="text-xs text-gray-500">{alert.source}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Searches */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-semibold mb-2">Recent Searches</div>
            <div className="space-y-2">
              {[
                ["Healthcare Policy Coverage", 142],
                ["Budget Reactions", 87],
                ["Election Results", 54],
                ["Sports Achievements", 33],
                ["Technology Updates", 21],
              ].map(([label, count], i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-blue-600">search</span>
                    {label}
                  </div>
                  <span className="bg-blue-100 text-blue-600 rounded px-2 text-xs">
                    {count} results
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
