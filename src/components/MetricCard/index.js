import React from "react";
import { TrendingUp } from "lucide-react";

export default function MetricCard({
  title,
  value,
  increase,
  bgColor = "bg-blue-50",
}) {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col gap-2`}>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-semibold">{value}</span>
        <div className="flex items-center text-green-600 text-sm">
          <span>+{increase}%</span>
          <TrendingUp className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );
}
