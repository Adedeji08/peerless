import { useState } from "react";
import { Search, LogOut, ChevronDown, Info, Home } from "lucide-react";
import Sidebar from "../../components/laypout/sidebar";
import Navebar from "../../components/laypout/navbar";
import { Link } from "react-router-dom";
import Icon from "../../assets/icon";

export default function Details() {
  const [activeTab, setActiveTab] = useState("Tampa (FL)");

  const timelineItems = [
    { id: 1, label: "1 week ago" },
    { id: 2, label: "1 month ago" },
    { id: 3, label: "5 hours ago" },
    { id: 4, label: "15 minutes ago" },
    { id: 5, label: "2 months ago" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <button className="bg-black text-white p-4 rounded-full shadow-lg">
          <Home size={24} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Navebar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Link to={"/"} className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Nintendo</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Icon name="homeIcon" />
                <span>Dashboard</span>
              </div>
              <span>›</span>
              <span className="flex gap-1">
                {" "}
                <Icon name="homeIcon2" /> Orlando
              </span>
              <span>›</span>
              <span className="flex gap-1">  <Icon name='homeIcon3'/> New Murabella Financing</span>
            </div>
          </Link>

          {/* Timeline */}
          <div className="flex justify-between mt-8 relative w-[60%] mx-auto ">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.id === 1
                      ? "bg-[#A93636] text-white"
                      : "bg-white border border-gray-300"
                  }`}
                >
                  {item.id}
                </div>
                <div className="text-xs mt-1 whitespace-nowrap">
                  {item.label}
                </div>

                {/* Connector line */}
                {index < timelineItems.length - 1 && (
                  <div
                    className="absolute h-0.5 bg-gray-300"
                    style={{
                      left: `${
                        (index * 100) / (timelineItems.length - 1) + 9
                      }%`,
                      right: `${
                        100 -
                        ((index + 1) * 100) / (timelineItems.length - 1) +
                        9
                      }%`,
                      top: "1rem",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Form Area */}
          <div className="bg-white p-6 rounded-md w-[75%] mx-auto shadow-sm mt-8">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="location"
                  value="Tampa (FL)"
                  checked={activeTab === "Tampa (FL)"}
                  onChange={() => setActiveTab("Tampa (FL)")}
                  className="mr-2"
                />
                Tampa (FL)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="location"
                  value="Orlando (FL)"
                  checked={activeTab === "Orlando (FL)"}
                  onChange={() => setActiveTab("Orlando (FL)")}
                  className="mr-2 "
                />
                Tampa (FL)
              </label>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium mb-1">
                  Web Designer <span className="text-[#F00404]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter asset name"
                  className="w-full h-[54px] border border-gray-300 rounded p-2"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-1">
                  Marketing Coordinator{" "}
                  <span className="text-[#F00404]">*</span>
                  <Info size={14} className="ml-1 text-gray-400" />
                </label>
                <textarea
                  placeholder="Enter asset description"
                  className="w-full border border-gray-300 rounded p-2 h-[178px]"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Medical Assistant
                  </label>
                  <div className="relative">
                    <select className="w-full h-[54px] border border-gray-300 rounded p-2 appearance-none">
                      <option>Select Option</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Web Designer
                  </label>
                  <div className="relative">
                    <select className="w-full border h-[54px] border-gray-300 rounded p-2 appearance-none">
                      <option>Select Option</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nursing Assistant
                  </label>
                  <input
                    type="text"
                    placeholder="Enter value"
                    className="w-full border h-[54px] border-gray-300 rounded p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    President of Sales
                  </label>
                  <div className="relative">
                    <select className="w-full h-[54px] border border-gray-300 rounded p-2 appearance-none">
                      <option>Select Option</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Dog Trainer
                </label>
                <div className="relative">
                  <select className="w-full h-[54px] border border-gray-300 rounded p-2 appearance-none">
                    <option>Select Option</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
