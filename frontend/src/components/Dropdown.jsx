import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const dropdownRef = useRef(null); // Ref to track the dropdown container

    const options = ["In Review", "Verified", "Rejected", "Pending Images"]; // List of options

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option); // Set the selected option
        setIsOpen(false); // Close the dropdown
    };

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative font-montserrat text-base font-normal" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-4 rounded-md bg-white text-[#666666] w-full justify-between shadow-[0px_3px_10px_rgba(0,0,0,0.15)]"
            >
                <span>{selectedOption || "Select Status"}</span>
                <IoIosArrowDown className={`ml-2 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}/>
            </button>
            {isOpen && (
                <div className="absolute left-0 w-full mt-2 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-2">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 text-[#333333] hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
