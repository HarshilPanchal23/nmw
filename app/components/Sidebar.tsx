'use client'
import Link from "next/link";

import { useState } from "react";

const menu = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { label: "Media", icon: "perm_media", href: "/media" },
  { label: "News Alerts", icon: "notifications", href: "/news-alerts" },
  { label: "Upload", icon: "cloud_upload", href: "/upload" },
  { label: "Search", icon: "search", href: "/search" },
  {
    label: "Reports", icon: "description", children: [
      { label: "Reports", href: "/reports" },
      { label: "Perception Report", href: "/reports/perception" },
    ]
  },
  {
    label: "Analytics", icon: "analytics", children: [
      { label: "AI/ML Analytics", href: "/analytics/ai-ml" },
    ]
  },
  {
    label: "Manage", icon: "settings", children: [
      { label: "Ministry", href: "/manage/ministry" },
      { label: "Ministry Alert", href: "/manage/ministry-alert" },
      { label: "Users", href: "/manage/users" },
      { label: "Role", href: "/manage/role" },
      { label: "Publication", href: "/manage/publication" },
      { label: "Topic", href: "/manage/topic" },
      { label: "Zone", href: "/manage/zone" },
      { label: "Influencer", href: "/manage/influencer" },
    ]
  },
  { label: "User Logs", icon: "history", href: "/user-logs" },
  { label: "Download E-Paper", icon: "file_download", href: "/download-e-paper" },
  { label: "FAQs", icon: "help_outline", href: "/faqs" },
];

export default function Sidebar() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (label: string) => setOpen((o) => ({ ...o, [label]: !o[label] }));

  return (
    <aside className="w-64 bg-white border-r flex flex-col min-h-screen">
      <div className="h-16 flex items-center px-6 font-bold text-lg border-b">NMW</div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {menu.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                onClick={() => toggle(item.label)}
              >
                <span className="material-icons mr-3">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                <span className="material-icons text-sm">
                  {open[item.label] ? "expand_less" : "expand_more"}
                </span>
              </button>
              {open[item.label] && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-2 py-1 rounded hover:bg-blue-50 text-sm"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <span className="material-icons mr-3">{item.icon}</span>
              {item.label}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
} 