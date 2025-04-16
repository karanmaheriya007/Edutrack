import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const DistrictPage = () => {

    const navigate = useNavigate(); // Hook for navigation

    //eslint-disable-next-line
    const [regions, setRegions] = useState([
        { id: "Vikasnagar", name: "Vikasnagar", infrastructure: 5, ict: 5, software: 3, teacherTraining: 0, overallScore: 3, priority: "Priority 1" },
        { id: "Chakrata", name: "Chakrata", infrastructure: 5, ict: 5, software: 3, teacherTraining: 0, overallScore: 3, priority: "Priority 2" },
        { id: "Diwali", name: "Diwali", infrastructure: 5, ict: 5, software: 3, teacherTraining: 0, overallScore: 3, priority: "Priority 4" },
        { id: "Sahaspar", name: "Sahaspar", infrastructure: 5, ict: 5, software: 3, teacherTraining: 0, overallScore: 3, priority: "Priority 3" },
        { id: "Kalsi", name: "Kalsi", infrastructure: 5, ict: 5, software: 3, teacherTraining: 0, overallScore: 3, priority: "Priority 5" }
    ]);

    // Simulating fetching data from an API
    useEffect(() => {
        // Fetch data from your backend here
        // e.g., axios.get('/api/status').then(response => setDistricts(response.data));
    }, []);

    const handleRowClick = (regionName) => {
        navigate(`/status/districts/dehradun/${regionName.toLowerCase()}`);
    };

    return (
        <>
            <div className="users_container font-nunito">
                <Link to="/status" className="flex items-center gap-2 text-[15px] font-bold text-[#B6B6B6] hover:underline"><FaArrowLeft size={13} />Districts / Dehradun</Link>
                <div className="header md:flex justify-between pt-1">
                    <p className="text-32 font-bold">Dehradun</p>
                    <button className="bg-[#563091] text-white py-3 px-20 rounded-lg mt-3 md:mt-0 text-sm">+ Add Block</button>
                </div>
                <div className="flex bg-[#F9F9FB] border-[#D5D5D5] md:w-fit border h-[70px] overflow-x-scroll custom-scrollbar mt-10 rounded-xl">
                    <div className="filter_img h-full px-6 flex items-center border-[#D5D5D5] border-r">
                        <img src="/src/assets/images/filter.svg" className="min-w-[22px]" alt="" />
                    </div>
                    <div className="filter_text text-sm font-bold h-full px-6 flex items-center align-middle border-[#D5D5D5] border-r">
                        <p className="font-nunito whitespace-nowrap">Filter By</p>
                    </div>
                    <div className="filter_drop1 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
                        <select name="infrastructure" id="infrastructure" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
                            <option value="infrastructure">Infrastructure</option>
                            <option value="software">Software</option>
                            <option value="internet_power">Internet & Power</option>
                            <option value="district_id">District ID</option>
                            <option value="district_name">District Name</option>
                        </select>
                    </div>
                    <div className="filter_drop2 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
                        <select name="computer" id="computer" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
                            <option value="computer">Computer</option>
                            <option value="less_than_1">Less than 1</option>
                            <option value="between_1_and_3">Between 1 and 3</option>
                            <option value="greater_than_3">Greater than 3</option>
                        </select>
                    </div>
                    <div className="filter_drop3 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
                        <select name="greater_than_0" id="greater_than_0" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
                            <option value="greater_than_0">4 &gt;</option>
                            <option value="less_than_1">Less than 1</option>
                            <option value="between_1_and_3">Between 1 and 3</option>
                            <option value="greater_than_3">Greater than 3</option>
                        </select>
                    </div>
                    <div className="reset_filter text-sm font-semibold gap-3 text-[#EA0234] h-full px-6 flex items-center cursor-pointer">
                        <img src="/src/assets/images/Path.svg" width={12} className="h-fit" alt="" />
                        <p className="whitespace-nowrap pt-[3px]">Reset Filter</p>
                    </div>
                </div>
                {/* table */}
                <div className="overflow-x-auto mt-7 bg-white district_table_container border border-[#B9B9B9] font-nunito rounded-lg pb-10">
                    <table className="min-w-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-[#FCFDFD]">
                                {["Block | Name", "+ Infrastructure Score", "+ ICT Score", "+ Software / Digital Score", "+ Teacher Training Score", "Overall Score", "Priority"].map((header, index) => (
                                    <th
                                        key={index}
                                        className={`px-7 py-4 text-sm font-extrabold text-[#202224] border-b border-gray-300 ${["Block | Name"].includes(header) ? "text-left" : "text-center"
                                            }`}
                                    >
                                        {header}
                                        {[
                                            "+ Infrastructure Score",
                                            "+ ICT Score",
                                            "+ Software / Digital Score",
                                            "+ Teacher Training Score",
                                            "Overall Score",
                                            "Priority"
                                        ].includes(header) && (
                                                <span className="ml-2 text-gray-400">
                                                    <img src="/src/assets/images/Vector.svg" className="inline" alt="" />
                                                </span>
                                            )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {regions.map((region) => (
                                <tr key={region.id} className="border-b border-[#D5D5D5] hover:bg-gray-50 text-center h-[72px] cursor-pointer" onClick={() => handleRowClick(region.id)} >
                                    <td className="px-7 py-3 text-sm font-semibold text-[#202224] text-left">{region.name}</td>
                                    <td className="px-7 py-3">
                                        <button
                                            className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${region.infrastructure <= 1
                                                ? "text-[#FF0004] bg-[#fad3d3]"
                                                : region.infrastructure <= 3
                                                    ? "text-[#FD9A56] bg-[#ffebdd]"
                                                    : "text-[#00B69B] bg-[#ccf0eb]"
                                                }`}
                                        >
                                            {region.infrastructure}
                                        </button>
                                    </td>
                                    <td className="px-7 py-3">
                                        <button
                                            className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${region.ict <= 1
                                                ? "text-[#FF0004] bg-[#fad3d3]"
                                                : region.ict <= 3
                                                    ? "text-[#FD9A56] bg-[#ffebdd]"
                                                    : "text-[#00B69B] bg-[#ccf0eb]"
                                                }`}
                                        >
                                            {region.ict}
                                        </button>
                                    </td>
                                    <td className="px-7 py-3">
                                        <button
                                            className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${region.software <= 1
                                                ? "text-[#FF0004] bg-[#fad3d3]"
                                                : region.software <= 3
                                                    ? "text-[#FD9A56] bg-[#ffebdd]"
                                                    : "text-[#00B69B] bg-[#ccf0eb]"
                                                }`}
                                        >
                                            {region.software}
                                        </button>
                                    </td>
                                    <td className="px-7 py-3">
                                        <button
                                            className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${region.teacherTraining <= 1
                                                ? "text-[#FF0004] bg-[#fad3d3]"
                                                : region.teacherTraining <= 3
                                                    ? "text-[#FD9A56] bg-[#ffebdd]"
                                                    : "text-[#00B69B] bg-[#ccf0eb]"
                                                }`}
                                        >
                                            {region.teacherTraining}
                                        </button>
                                    </td>
                                    <td className="px-7 py-3">
                                        <button
                                            className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${region.overallScore <= 1
                                                ? "text-[#FF0004] bg-[#fad3d3]"
                                                : region.overallScore <= 3
                                                    ? "text-[#FD9A56] bg-[#ffebdd]"
                                                    : "text-[#00B69B] bg-[#ccf0eb]"
                                                }`}
                                        >
                                            {region.overallScore}
                                        </button>
                                    </td>
                                    <td className="px-7 py-6 text-xs font-bold border-b border-[#D5D5D5]"><button className="min-w-[70px] py-1 rounded text-[#4C2B2B] bg-[#DBD5D5] px-1">{region.priority}</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DistrictPage
