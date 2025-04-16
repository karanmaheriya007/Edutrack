import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

  // Sample data to simulate data from the backend
    //eslint-disable-next-line
    const [users, setUsers] = useState([
      { id: '00001', name: 'Ankita CEO', email: 'admin@edutrack.com', date: '06 Nov 2024', userType: 'Admin', userStatus: 'Active' },
      { id: '00002', name: 'Chief Education Officer', email: 'ceo@edutrack.com', date: '06 Nov 2024', userType: 'District', userStatus: 'Active' },
      { id: '00003', name: 'Block A', email: 'admin@edutrack.com', date: '06 Nov 2024', userType: 'Block', userStatus: 'Active' },
      { id: '00004', name: 'Anderson', email: 'principleanderson@edutrack.com', date: '06 Nov 2024', userType: 'Principal', userStatus: 'Active' },
      { id: '00005', name: 'Ban', email: 'ban@edutrack.com', date: '06 Nov 2024', userType: 'Principal', userStatus: 'Active' },
      { id: '00006', name: 'Kareem', email: 'kareem@edutrack.com', date: '06 Nov 2024', userType: 'Principal', userStatus: 'In Active' },
  ]);

  // Simulating fetching data from an API
  useEffect(() => {
      // Fetch data from your backend here
      // e.g., axios.get('/api/users').then(response => setUsers(response.data));
  }, []);

  return (
    <>
      <div className="users_container font-nunito">
        <div className="header md:flex justify-between pt-5">
          <p className="text-32 font-bold">Users</p>
          <Link to="adduser"><button className="bg-[#563091] text-white py-3 px-20 rounded-lg mt-3 md:mt-0 text-sm min-h-[48px]">+ Add User</button></Link>
        </div>
        <div className="flex bg-[#F9F9FB] border-[#D5D5D5] md:w-fit border h-[70px] overflow-x-scroll custom-scrollbar mt-10 rounded-xl">
          <div className="filter_img h-full px-6 flex items-center border-[#D5D5D5] border-r">
            <img src="src/assets/images/filter.svg" className="min-w-[22px]" alt="" />
          </div>
          <div className="filter_text text-sm font-bold h-full px-6 flex items-center align-middle border-[#D5D5D5] border-r">
            <p className="font-nunito whitespace-nowrap">Filter By</p>
          </div>
          <div className="filter_drop1 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
            <select name="user_type" id="user_type" className="w-[130px] bg-[#F9F9FB] cursor-pointer">
              <option value="user_type">User Type</option>
              <option value="admin">Admin</option>
              <option value="district">District</option>
              <option value="block">Block</option>
              <option value="principal">Principal</option>
            </select>
          </div>
          <div className="filter_drop2 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
            <select name="user_status" id="user_status" className="w-[130px] bg-[#F9F9FB] cursor-pointer">
              <option value="user_status">User Status</option>
              <option value="active">Active</option>
              <option value="in_active">In Active</option>
            </select>
          </div>
          <div className="reset_filter text-sm font-semibold gap-3 text-[#EA0234] h-full px-6 flex items-center cursor-pointer">
            <img src="src/assets/images/Path.svg" width={12} className="h-fit" alt="" />
            <p className="whitespace-nowrap pt-[3px]">Reset Filter</p>
          </div>
        </div>
        {/* table */}
        <div className="overflow-x-auto mt-7 bg-white border border-[#B9B9B9] rounded-lg pb-10">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-[#FCFDFD]">
                        {['User ID', 'NAME', 'Email', 'DATE', 'USER TYPE', 'USER STATUS'].map((header) => (
                            <th key={header} className="px-7 py-4 text-left text-sm font-extrabold text-[#202224] border-b border-[#D5D5D5]">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b border-[#D5D5D5] hover:bg-gray-50">
                            <td className="px-7 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.id}</td>
                            <td className="px-7 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.name}</td>
                            <td className="pr-0 px-7 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.email}</td>
                            <td className="px-7 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.date}</td>
                            <td className="px-7 py-2 text-xs font-semibold border-b border-[#D5D5D5]"><button className={`min-w-[60px] rounded px-1 py-1 ${user.userType === 'Admin' ? 'text-[#00B69B] bg-[#ccf0eb]' :
                                user.userType === 'District' ? 'text-[#FD9A56] bg-[#ffebdd]' :
                                    user.userType === 'Block' ? 'text-[#D456FD] bg-[#f6ddff]' :
                                        'text-[#5A8CFF] bg-[#dee8ff]'
                                }`}>{user.userType}</button></td>
                            <td className="px-7 py-6 text-xs font-bold border-b border-[#D5D5D5]"><button className={`min-w-[90px] px-1 py-1 rounded ${user.userStatus === 'Active' ? 'text-[#00B69B] bg-[#ccf0eb]' : 'text-[#FF0004] bg-[#fad3d3]'
                                }`}>{user.userStatus}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Users
