import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, ArrowLeft, Download } from "lucide-react";

import Header from "../../components/Header";
import IncidentCard from "../../components/IncidentCard";
import Map from "../../components/Map";
import axiosInstance from "../../utils/ApiCaller";
import { incidentEndPoint } from "../../utils/endpoint";

export default function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    handleReport();
  }, [searchQuery]);
  const handleReport = async () => {
    try {
      axiosInstance
        .get(`${incidentEndPoint}?search=${searchQuery}`)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="p-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <Link to="/" className="text-yellow-500 hover:text-yellow-600">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Reports</span>
        </div>

        {/* Title and Export button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold">Reports</h1>
          </div>
          <button className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
            <Download className="h-4 w-4" />
            Export to CSV
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-4">
          {/* Left sidebar */}
          <div className="space-y-4">
            {/* Search and Add */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Reports"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button className="p-2 bg-white border rounded-lg hover:bg-gray-50">
                <Plus className="h-5 w-5" />
              </button>
            </div>

            {/* Results count */}
            <div className="text-sm text-gray-600">144 result(s) found</div>

            {/* Incidents list */}
            <div className="space-y-3">
              {incidents.map((incident) => (
                <IncidentCard
                  key={incident.id}
                  incident={incident}
                  onResolve={() =>
                    console.log("Resolve incident:", incident.id)
                  }
                />
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-[calc(100vh-200px)]">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
