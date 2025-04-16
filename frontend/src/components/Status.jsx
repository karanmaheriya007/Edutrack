import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Status = () => {

  const navigate = useNavigate(); // Initialize navigate function

  //eslint-disable-next-line
  const [districts, setDistricts] = useState([
    { id: "00001", name: "Dehradun", hardware: 5, software: 3, internet: 0 },
    { id: "00002", name: "Haridwar", hardware: 4, software: 4, internet: 1 },
    { id: "00003", name: "Chamoli", hardware: 5, software: 3, internet: 0 },
    { id: "00004", name: "Rudraprayag", hardware: 1, software: 3, internet: 4 },
    { id: "00005", name: "Uttarkashi", hardware: 5, software: 3, internet: 0 },
  ]);

  // Simulating fetching data from an API
  useEffect(() => {
    // Fetch data from your backend here
    // e.g., axios.get('/api/status').then(response => setDistricts(response.data));
  }, []);

  // Handle row click and redirect
  const handleRowClick = (districtName) => {
    // Navigate to the specific district page
    navigate(`/status/districts/${districtName.toLowerCase()}`);
  };

  return (
    <>
      <div className="users_container font-nunito">
        <div className="header md:flex justify-between pt-5">
          <p className="text-32 font-bold">Status by District</p>
          <button className="bg-[#563091] text-white py-3 px-20 rounded-lg mt-3 md:mt-0 text-sm">+ Add District</button>
        </div>
        <div className="flex bg-[#F9F9FB] border-[#D5D5D5] md:w-fit border h-[70px] overflow-x-scroll custom-scrollbar mt-10 rounded-xl">
          <div className="filter_img h-full px-6 flex items-center border-[#D5D5D5] border-r">
            <img src="/src/assets/images/filter.svg" className="min-w-[22px]" alt="" />
          </div>
          <div className="filter_text text-sm font-bold h-full px-6 flex items-center align-middle border-[#D5D5D5] border-r">
            <p className="font-nunito whitespace-nowrap">Filter By</p>
          </div>
          <div className="filter_drop1 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
            <select name="hardware" id="hardware" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="internet_power">Internet & Power</option>
              <option value="district_id">District ID</option>
              <option value="district_name">District Name</option>
            </select>
          </div>
          <div className="filter_drop2 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
            <select name="greater_than_0" id="greater_than_0" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
              <option value="greater_than_0">Greater than 0</option>
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
                {[
                  "District ID",
                  "NAME",
                  "+ Hardware",
                  "+ Software",
                  "+ Internet & Power",
                  "Action",
                ].map((header, index) => (
                  <th
                    key={index}
                    className={`px-7 py-4 text-sm font-extrabold text-[#202224] border-b border-gray-300 ${["District ID", "NAME"].includes(header) ? "text-left" : "text-center"
                      }`}
                  >
                    {header}
                    {["+ Hardware", "+ Software", "+ Internet & Power"].includes(header) && (
                      <span className="ml-2 text-gray-400 pl-5">
                        <img src="/src/assets/images/Vector.svg" className="inline" alt="" />
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {districts.map((district) => (
                <tr key={district.id} className="border-b border-[#D5D5D5] hover:bg-gray-50 text-center h-[72px] cursor-pointer" onClick={() => handleRowClick(district.name)}>
                  <td className="px-7 py-3 text-sm font-semibold text-[#202224] text-left">{district.id}</td>
                  <td className="px-7 py-3 text-sm font-semibold text-[#202224] text-left">{district.name}</td>
                  <td className="px-7 py-3">
                    <button
                      className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${district.hardware <= 1
                        ? "text-[#FF0004] bg-[#fad3d3]"
                        : district.hardware <= 3
                          ? "text-[#FD9A56] bg-[#ffebdd]"
                          : "text-[#00B69B] bg-[#ccf0eb]"
                        }`}
                    >
                      {district.hardware}
                    </button>
                  </td>
                  <td className="px-7 py-3">
                    <button
                      className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${district.software <= 1
                        ? "text-[#FF0004] bg-[#fad3d3]"
                        : district.software <= 3
                          ? "text-[#FD9A56] bg-[#ffebdd]"
                          : "text-[#00B69B] bg-[#ccf0eb]"
                        }`}
                    >
                      {district.software}
                    </button>
                  </td>
                  <td className="px-7 py-3">
                    <button
                      className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${district.internet <= 1
                        ? "text-[#FF0004] bg-[#fad3d3]"
                        : district.internet <= 3
                          ? "text-[#FD9A56] bg-[#ffebdd]"
                          : "text-[#00B69B] bg-[#ccf0eb]"
                        }`}
                    >
                      {district.internet}
                    </button>
                  </td>
                  <td className="px-7">
                    <button className="text-gray-600 hover:text-gray-800">
                      <img src="/src/assets/images/topdown.svg" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Status
