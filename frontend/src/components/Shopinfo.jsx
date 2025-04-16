import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Shopinfo = () => {
    return (
        <>
            <div className="users_container font-nunito">
                <Link to="/status/districts/dehradun/vikasnagar" className="flex items-center gap-2 text-[15px] font-bold text-[#B6B6B6] hover:underline"><FaArrowLeft size={13} />Districts / Dehradun / Vikasnagar / GIC Nakot</Link>
                <div className="header md:flex justify-between pt-1">
                    <p className="text-32 font-bold">GIC Nakot</p>
                </div>
            </div>
            <div className="md:flex informations font-inter mt-10 gap-10">
                <div className="general_information text-sm w-full border-[#B9B9B9] border rounded-2xl">
                    <div className="info_header bg-[#FCFDFD] border-[#D5D5D5] border-b px-4 py-3 rounded-tl-2xl rounded-tr-2xl">
                        <p className="font-extrabold font-nunito">General Information</p>
                    </div>
                    <div className="info bg-white px-4 pt-4 pb-7 rounded-bl-2xl rounded-br-2xl">
                        <p className="district font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>District:</span> Dehradun</p>
                        <p className="block font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>Block:</span> Vikasnagar</p>
                        <p className="udise_id font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>UDISE ID:</span> 12154582213</p>
                    </div>
                </div>
                <div className="principal_information text-sm w-full border-[#B9B9B9] border rounded-2xl mt-6 md:mt-0">
                    <div className="info_header bg-[#FCFDFD] border-[#D5D5D5] border-b px-4 py-3 rounded-tl-2xl rounded-tr-2xl">
                        <p className="font-extrabold font-nunito">Principal Information</p>
                    </div>
                    <div className="info bg-white px-4 pt-4 pb-7 rounded-bl-2xl rounded-br-2xl">
                        <p className="district font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>Name:</span> Ramesh Rathi</p>
                        <p className="block font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>Email:</span> ramesh@gmail.com</p>
                        <p className="udise_id font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>Phone:</span> 9898985896</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shopinfo
