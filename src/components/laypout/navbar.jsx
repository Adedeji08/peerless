import React from "react";
import Icon from "../../assets/icon";
import { SearchIcon, Menu } from "lucide-react";
function Navebar({ toggleSidebar, searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="bg-white px-4 py-3 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div className="flex items-center w-full sm:w-auto">
          <button
            className="text-gray-600 mr-3 focus:outline-none lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
          <div className="relative flex-1 sm:flex-none">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none"
              type="text"
              placeholder="Search Parameter & Perms"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 w-full sm:w-auto">
          <div className="lg:text-[14px] md:text-[12px]  text-gray-600 hidden md:block">
            <span>Thur, Dec 11, 2024 18:29</span>
            <span className="mx-2">|</span>
            <span className="font-medium">Business Date:</span>
            <span className="ml-1">Thur, Dec 11, 2024 16:29</span>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="relative">
              <Icon name="bellIcon" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>

            <div className="flex gap-2 items-center cursor-pointer bg-[#F4F4F4] p-2 rounded-full">
              <Icon name="userIcon" />

              <span className="mr-1 text-sm font-medium">Iloyi Branch</span>
              <Icon name="dropdownIcon" />
            </div>

            <div className="flex gap-2 items-center cursor-pointer bg-[#F4F4F4] p-2 rounded-full">
              <Icon name="personIcon" />
              <span className="mr-1 text-sm font-medium">Eric Alawaye</span>
              <Icon name="dropdownIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navebar;
