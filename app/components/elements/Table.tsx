'use client'
import React, { useState } from "react";

export type Column = {
  columnLabel?: string;
  columnKey: string;
  isSticky?: boolean;
  minWidth?: string;
  maxWidth ?: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type TableProps = {
  columns?: Column[];
  tableData: any[];
  handleSelect?: (selectedIds: string[]) => void;
  rowActions?: (row: any,rowIdx:number) => React.ReactNode;
};

const DynamicTable = ({ columns = [], tableData = [], handleSelect, rowActions }: TableProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const allSelected = tableData?.length > 0 && selectedIds.length === tableData?.length;

  const toggleSelectAll = () => {
    const allIds = tableData?.map((row) => row.id);
    const newSelected = allSelected ? [] : allIds;
    setSelectedIds(newSelected);
    handleSelect?.(newSelected);
  };

  const toggleSelectOne = (id: string) => {
    const newSelected = selectedIds.includes(id)
      ? selectedIds.filter((sid) => sid !== id)
      : [...selectedIds, id];
    setSelectedIds(newSelected);
    handleSelect?.(newSelected);
  };

  return (
    <div className="bg-white">
      <div className="overflow-x-auto w-200 min-w-full">
        <table className="text-sm w-full">
          <thead>
            <tr className="bg-gray-50">
              {handleSelect && (
                <th className="px-4 py-2 sticky left-0  bg-gray-50">
                  <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
                </th>
              )}
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-2 text-left overflow-hidden font-semibold ${col.isSticky ? "sticky z-10 bg-gray-50" : ""}`}
                  style={{
                    left: col.isSticky ? 0 : undefined,
                    right: col.isSticky ? 0 : undefined,
                    minWidth: col.minWidth || "auto",
                    maxWidth:col.maxWidth || "auto"
                  }}
                >
                 <div className="text-nowrap overflow-hidden text-ellipsis w-full"> {col.columnLabel || col.columnKey}</div>
                </th>
              ))}
              {rowActions && (
                <th className="px-4 py-2 sticky right-0  bg-gray-50 font-semibold">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="max-h-[700px]  min-h-[500px] overflow-y-auto">
            {tableData.map((row, rowIdx) => (
              <tr key={row.id || rowIdx} className="border-b overflow-hidden hover:bg-gray-50">
                {handleSelect && (
                  <td className="px-4 sticky left-0 bg-white">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => toggleSelectOne(row.id)}
                    />
                  </td>
                )}
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-4 py-2 ${col.isSticky ? "sticky bg-white z-0" : ""}`}
                    style={{
                      left: col.isSticky ? 0 : undefined,
                      right: col.isSticky ? 0 : undefined,
                      minWidth: col.minWidth || "auto",
                    }}
                  >
                    {col.render
                      ? col.render(row[col.columnKey], row)
                      : row[col.columnKey] ?? "-"}
                  </td>
                ))}
                {rowActions && (
                  <td className="px-4 sticky right-0 bg-white">
                    {rowActions(row,rowIdx)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
