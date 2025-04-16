import { useState, useEffect, useRef } from "react";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { AiFillMessage } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { IoIosPower } from "react-icons/io";
import { LuPieChart } from "react-icons/lu";
import { PiGearFill, PiSquaresFourFill } from "react-icons/pi";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Sidebar = () => {
  const location = useLocation(); // Get current location
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sideborderHeight, setSideborderHeight] = useState(0);
  const [sideborderTop, setSideborderTop] = useState(0);

  const linkRefs = useRef({});

  const menuItems = [
    { name: "Dashboard", icon: <PiSquaresFourFill size={24} />, url: "/dashboard" },
    { name: "Users", icon: <FAIcon icon={faUserGroup} className="scale-105" width={24} />, url: "/users" },
    { name: "Status", icon: <LuPieChart size={22} />, url: "/status" },
    { name: "Concerns", icon: <AiFillMessage size={24} />, url: "/concerns" },
    { name: "Recommendation", icon: <BiLike size={24} />, url: "/recommendation" },
    { isDivider: true }, // Divider marker
    { name: "Setting", icon: <PiGearFill size={24} />, url: "/setting" },
    { name: "Logout", icon: <IoIosPower size={24} />, url: "/logout" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    // Check if the current path starts with '/status'
    const activeItem = menuItems.find((item) =>
      currentPath.startsWith(item.url)
    );
    setActiveLink(activeItem ? activeItem.name : null);
    //eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    if (activeLink && linkRefs.current[activeLink]) {
      const linkElement = linkRefs.current[activeLink];
      setSideborderHeight(linkElement.offsetHeight);
      setSideborderTop(linkElement.offsetTop);
    } else {
      setSideborderHeight(0); // Reset when no active link
      setSideborderTop(0);
    }
  }, [activeLink]);

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        className="menu-toggle-button lg:hidden fixed top-4 left-4 z-0 p-2 rounded-full bg-gray-200 hover:gray-200"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiAlignJustify size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar bg-white shadow-[0_4px_4px_0_#00000040] min-h-screen py-5 max-[320px]:overflow-scroll max-w-[260px] fixed lg:relative lg:block transition-transform duration-300 z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="dashboard_logo mb-7 pt-4">
          <Link to="/">
            <img src="/images/LOGO.svg" className="mx-auto" width={160} alt="logo" />
          </Link>
        </div>
        <div className="dashboard_menu relative">
          {/* Sideborder */}
          {activeLink && (
            <div
              className="sideborder bg-[#563091] p-2 absolute left-[-12px] rounded-md transition-all duration-300"
              style={{
                top: `${sideborderTop}px`,
                height: `${sideborderHeight}px`,
              }}
            ></div>
          )}

          {menuItems.map((item, index) =>
            item.isDivider ? (
              <hr
                key={index}
                className="my-4 border-t border-gray-300 w-full"
                style={{ marginLeft: 0, marginRight: 0 }}
              />
            ) : (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsSidebarOpen(false); // Optional: Close sidebar in mobile view
                }}
                ref={(el) => {
                  linkRefs.current[item.name] = el;
                }}
                className={`!mx-7 dashboard_menu_link flex items-center space-x-2 py-[14px] px-4 rounded-lg transition-colors duration-200 ${activeLink === item.name
                  ? "bg-[#563091] !text-white"
                  : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
