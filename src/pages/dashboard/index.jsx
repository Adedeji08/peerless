import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../../assets/icon";
import Sidebar from "../../components/laypout/sidebar";
import Navebar from "../../components/laypout/navbar";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Nursing Assistant",
      name: "Akindunjoyé Tolulope",
      icon: <Icon name="nurseIcon" />,
    },
    {
      id: 2,
      title: "Nursing Assistant",
      icon: <Icon name="nurseIcon2" />,
    },
    {
      id: 3,
      title: "Web Designer",
      icon: <Icon name="webIcon" />,
    },
    {
      id: 4,
      title: "Dog Trainer",
      icon: <Icon name="dogIcon" />,
    },
    {
      id: 5,
      title: "Nursing Assistant",
      icon: <Icon name="nurseIcon3" />,
    },
    {
      id: 6,
      title: "Marketing Coordinator",
      icon: <Icon name="marketIcon" />,
    },
    {
      id: 7,
      title: "Marketing Coordinator",
      icon: <Icon name="marketIcon2" />,
    },
    {
      id: 8,
      title: "Web Designer",
      icon: <Icon name="web2Icon" />,
    },
    {
      id: 9,
      title: "Medical Assistant",
      icon: <Icon name="medIcon" />,
    },
    {
      id: 10,
      title: "Marketing Coordinator",
      icon: <Icon name="corIcon" />,
    },
    {
      id: 11,
      title: "Web Designer",
      icon: <Icon name="web3Icon" />,
    },
    {
      id: 12,
      title: "President of Sales",
      icon: <Icon name="dogIcon" />,
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleJobClick = (jobId) => {
    // Navigate to details page when a job card is clicked
    // You can also pass the job ID as a parameter if needed
    navigate('/details');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <Navebar
          setSearchQuery={setSearchQuery}
          toggleSidebar={toggleSidebar}
          searchQuery={searchQuery}
        />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold">
              Hello Eric Omotolani
            </h1>
            <p className="text-gray-600">Welcome to your dashboard</p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {jobs.map((job) => {
              const hasHighlight = job.id === 1 || job.id === 6;
              const highlightColor =
                job.id === 1 ? "bg-blue-100" : job.id === 6 ? "bg-red-100" : "";

              return (
                <div
                  key={job.id}
                  className={`bg-white rounded-lg hover:bg-[#F9E9E9] shadow-sm p-4 ${highlightColor} cursor-pointer hover:shadow-md transition-shadow`}
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="flex items-start">
                    <div className="bg-gray-300 rounded-md p-2 mr-3 flex-shrink-0">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{job.title}</h3>
                      {job.name && (
                        <p className="text-sm text-gray-500 font-semibold">
                          {job.name}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore...
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}