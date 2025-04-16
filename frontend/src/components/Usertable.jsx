import { useState, useEffect } from 'react';

const Usertable = () => {
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
        <div className="overflow-x-auto mt-7 bg-white border border-[#B9B9B9] rounded-lg pb-10">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-[#FCFDFD]">
                        {['User ID', 'NAME', 'Email', 'DATE', 'USER TYPE', 'USER STATUS'].map((header) => (
                            <th key={header} className="pl-10 px-4 py-4 text-left text-sm font-extrabold text-[#202224] border-b border-[#D5D5D5]">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b border-[#D5D5D5] hover:bg-[#ffffff]">
                            <td className="pl-9 px-4 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.id}</td>
                            <td className="pl-9 px-4 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.name}</td>
                            <td className="pl-9 pr-0 px-4 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.email}</td>
                            <td className="pl-9 px-4 py-2 text-sm font-semibold text-[#202224] border-b border-[#D5D5D5]">{user.date}</td>
                            <td className="pl-9 px-4 py-2 text-xs font-semibold border-b border-[#D5D5D5]"><button className={`w-[60px] rounded py-1 ${user.userType === 'Admin' ? 'text-[#00B69B] bg-[#ccf0eb]' :
                                user.userType === 'District' ? 'text-[#FD9A56] bg-[#ffebdd]' :
                                    user.userType === 'Block' ? 'text-[#D456FD] bg-[#f6ddff]' :
                                        'text-[#5A8CFF] bg-[#dee8ff]'
                                }`}>{user.userType}</button></td>
                            <td className="pl-9 px-4 py-6 text-xs font-bold border-b border-[#D5D5D5]"><button className={`w-[93px] py-1 rounded ${user.userStatus === 'Active' ? 'text-[#00B69B] bg-[#ccf0eb]' : 'text-[#FF0004] bg-[#fad3d3]'
                                }`}>{user.userStatus}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Usertable;
