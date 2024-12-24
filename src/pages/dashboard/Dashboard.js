import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

import Header from "../../components/Header";
import MetricCard from "../../components/MetricCard";
import ReportTable from "../../components/ReportTable/index";

const mockReports = [
  {
    id: 1,
    incidentNo: "01",
    incidentType: "Animal Hazard",
    status: "High",
    reportedOn: "18/02/2024 12:00:24",
    resolvedOn: "",
    reportedBy: "Peter S",
  },
  {
    id: 2,
    incidentNo: "02",
    incidentType: "Heavy Snow",
    status: "Low",
    reportedOn: "18/02/2024 12:00:24",
    resolvedOn: "11/04/2024 12:00:24",
    reportedBy: "John",
  },
  // Add more mock data as needed
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-md border">
            Last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Number of users"
            value="5,250"
            increase="11.01"
            bgColor="bg-blue-50"
          />
          <MetricCard
            title="All Incidents"
            value="1,250"
            increase="11.01"
            bgColor="bg-green-50"
          />
          <MetricCard
            title="Live Incidents"
            value="12"
            increase="11.01"
            bgColor="bg-blue-50"
          />
          <Link
            to="/reports"
            className="bg-[#FFD700] rounded-lg p-6 flex items-center justify-between hover:bg-[#FFD700]/90 transition-colors"
          >
            <span className="font-medium">View all report</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Live Reports</h2>
          <ReportTable reports={mockReports} />
        </div>
      </main>
    </div>
  );
}
