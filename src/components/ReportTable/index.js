import React from "react";
import { Link } from "react-router-dom";
import { MoreVertical, Eye } from "lucide-react";
import StatusBadge from "../StatusBadge";

export default function ReportTable({ reports }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Incident No
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Incident Type
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Status
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Reported on
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Resolved on
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Reported by
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-4 text-sm text-yellow-500">
                {report.incidentNo}
              </td>
              <td className="py-4 px-4 text-sm">{report.incidentType}</td>
              <td className="py-4 px-4">
                <StatusBadge severity={report.status} />
              </td>
              <td className="py-4 px-4 text-sm">{report.reportedOn}</td>
              <td className="py-4 px-4 text-sm">{report.resolvedOn || "-"}</td>
              <td className="py-4 px-4 text-sm">{report.reportedBy}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
