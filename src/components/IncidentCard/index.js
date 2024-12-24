import React from "react";
import { MoreVertical, MapPin } from "lucide-react";
import StatusBadge from "../StatusBadge";

export default function IncidentCard({ incident, onResolve }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-start gap-2">
          <span className="text-sm font-medium">
            {incident.id}. {incident.type}
          </span>
          <StatusBadge severity={incident.severity} />
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreVertical className="h-4 w-4 text-gray-500" />
        </button>
      </div>
      <div className="text-xs text-gray-500 mb-2">{incident.time} ago</div>
      <div className="flex items-start gap-1 text-sm text-gray-600 mb-3">
        <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
        <span>{incident.location}</span>
      </div>
      {incident.severity === "High" && (
        <button
          onClick={onResolve}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Resolve Incident
        </button>
      )}
    </div>
  );
}
