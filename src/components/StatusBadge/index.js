import React from "react";

const getStatusStyles = (severity) => {
  switch (severity.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-600";
    case "medium":
      return "bg-orange-100 text-orange-600";
    case "low":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function StatusBadge({ severity }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getStatusStyles(
        severity
      )}`}
    >
      <span className="mr-1">⚠</span>
      {severity}
    </span>
  );
}
