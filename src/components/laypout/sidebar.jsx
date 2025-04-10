import Icon from "../../assets/icon";
import { X } from "lucide-react";
import Logo from "../../assets/vector.png";
function Sidebar({ toggleSidebar, sidebarOpen }) {
  const navItems = [
    { id: 1, name: "Nintendo", icon: <Icon name="nintendoIcon" /> },
    { id: 2, name: "IBM", icon: <Icon name="ibmIcon" /> },
    { id: 3, name: "The Walt Disney Company", icon: <Icon name="waitIcon" /> },
    { id: 4, name: "Louis Vuitton", icon: <Icon name="louisIcon" /> },
    { id: 5, name: "MasterCard", icon: <Icon name="masterIcon" /> },
    { id: 6, name: "Pizza Hut", icon: <Icon name="pizzaIcon" /> },
    { id: 7, name: "MasterCard", icon: <Icon name="mIcon" /> },
    { id: 8, name: "Bank of America", icon: <Icon name="bankIcon" /> },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-black text-white flex flex-col border-r border-green-500 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center border-b border-[#393939]">
          <div className="mr-2">
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <div className="text-xl font-semibold">peerless</div>
            <div className="text-xs text-gray-400">Frontend Test</div>
          </div>
          <button
            className="ml-auto text-gray-400 lg:hidden"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto mt-9 mx-3 rounded-xl">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center p-4 rounded-xl hover:bg-gray-800 cursor-pointer ${
                item.id === 1 ? "bg-[#A93636]" : ""
              }`}
            >
              <div className="mr-3">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom sidebar items */}
        <div className="mt-auto border-t border-gray-800">
          <div className="flex items-center p-4 hover:bg-gray-800 cursor-pointer">
            <div className="mr-3">
              <Icon name="ibmIcon2" />
            </div>
            <span>IBM</span>
          </div>
          <div className="flex items-center p-4 hover:bg-gray-800 cursor-pointer">
            <div className="mr-3">
              <Icon name="logoutIcon" />
            </div>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
