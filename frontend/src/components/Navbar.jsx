import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoChevronDownOutline } from "react-icons/io5";
import { Popover } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null); // State for dropdown

    const handleSearchClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = (event) => {
        if (isMobileView) {
            setProfileAnchorEl(event.currentTarget);
        }
    };

    const handleProfilePopoverClose = () => {
        setProfileAnchorEl(null);
    };

    const handleDropdownClick = (event) => {
        setDropdownAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setDropdownAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const profileOpen = Boolean(profileAnchorEl);
    const dropdownOpen = Boolean(dropdownAnchorEl);

    // Add a resize event listener to detect screen width changes
    window.addEventListener("resize", () => {
        setIsMobileView(window.innerWidth < 768);
    });

    //get Full Name from local storage
    const fullName = localStorage.getItem("name") || "User";

    return (
        <>
            <div className="flex">
                <div className="navbar bg-white flex items-center md:justify-between justify-end px-4 py-[14px] font-nunito w-full h-fit">
                    <div className="search_div w-full max-w-xs md:block hidden relative ml-[50px]">
                        <HiMiniMagnifyingGlass className="absolute left-3 top-[9px] text-[#7a7b7d]" size={20} />
                        <input
                            id="search_input"
                            type="text"
                            placeholder="Search"
                            className="bg-[#F5F6FA] w-full pl-10 pr-4 py-2 border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-[0.5px] focus:ring-purple-500 focus:border-purple-500 text-sm"
                        />
                    </div>
                    <div className="nav_elements flex max-[320px]:gap-3 gap-5 items-center">
                        <HiMiniMagnifyingGlass id="search" className="text-[#7a7b7d] md:hidden" size={20} onClick={handleSearchClick} />
                        <div className="notification_bell flex relative">
                            <img src="/images/bell.svg" alt="" />
                            <span className="bg-[#F93C65] text-[#FEEAEF] h-[18px] w-[18px] text-center rounded-full text-xs absolute top-[-9px] left-3 border-[#FEEAEF] bottom-2">6</span>
                        </div>
                        <select id="options" name="options" className="focus:outline-none cursor-pointer text-sm font-semibold bg-white">
                            <option value="option1">English</option>
                            <option value="option2">Hindi</option>
                        </select>
                        <div className="user_profile flex gap-4">
                            <img src="/images/user.webp" alt="" className="user_img rounded-full" width={44} onClick={handleProfileClick} />
                            <div className="name_role md:flex hidden flex-col justify-center">
                                <p className="text-sm font-bold">{fullName}</p>
                                <p className="text-xs font-semibold">Admin</p>
                            </div>
                            <div className="flex items-center">
                                <div className="user_dropdown rounded-full border border-gray-500 p-1 flex items-center justify-center cursor-pointer" onClick={handleDropdownClick}>
                                    <IoChevronDownOutline size={10} className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open && (
                <div
                    onClick={handlePopoverClose}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        zIndex: 999,
                    }}
                ></div>
            )}

            {/* for search input */}
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        width: '100%',
                    },
                }}
                className="mt-5"
            >
                <div style={{ padding: '20px', position: 'relative' }}>
                    <HiMiniMagnifyingGlass
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '32px',
                            transform: 'translateY(-50%)',
                            color: '#7a7b7d',
                        }}
                        size={20}
                    />
                    <input
                        id="search_input"
                        type="text"
                        placeholder="Search"
                        className="bg-[#F5F6FA] w-full pl-10 pr-4 py-2 border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-[0.5px] focus:ring-purple-500 focus:border-purple-500 text-sm"
                        style={{
                            paddingLeft: '40px', // Adjust padding to make space for the icon
                        }}
                    />
                </div>
            </Popover>

            {/* for profile name */}
            <Popover
                open={profileOpen}
                anchorEl={profileAnchorEl}
                onClose={handleProfilePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{ padding: '10px 20px' }}>
                    <p className="text-sm font-bold font-nunito">{fullName}</p>
                    <p className="text-xs font-semibold font-nunito">Admin</p>
                </div>
            </Popover>

            {/* User Dropdown Popover */}
            <Popover
                open={dropdownOpen}
                anchorEl={dropdownAnchorEl}
                onClose={handleDropdownClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                className="mt-6"
            >
                <div className="dropdown_content">
                    <ul className="dropdown_list text-sm font-nunito">
                        <li className="dropdown_item">Profile</li>
                        <li className="dropdown_item">Inbox</li>
                        <li className="dropdown_item">Task Manager</li>
                        <li className="dropdown_item">Support</li>
                        {/* <li className="dropdown_item logout text-sm font-nunito bg-[#563091] text-white text-center">Log Out</li> */}
                    </ul>
                </div>
            </Popover>

        </>
    );
};

export default Navbar;
