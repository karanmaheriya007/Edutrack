import { Snackbar } from '@mui/material';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Dropdown from './Dropdown';

const Product = () => {

    const [products, setProducts] = useState([
        {
            image: '/src/assets/images/computer1.png',
            comments: 'The project is in review, pending further feedback.',
            status: 'In Review',
            updateDate: '31/05/2024',
            approver: '@Admin',
            rejectReason: '',
        },
        {
            image: '/src/assets/images/computer1.png',
            comments: 'Approved, everything is in order.',
            status: 'Approved',
            updateDate: '31/05/2024',
            approver: '@Admin',
            rejectReason: '',
        },
        {
            image: '/src/assets/images/computer4.png',
            comments: 'The project is in review, pending further feedback.',
            status: 'In Review',
            updateDate: '31/05/2024',
            approver: '@Admin',
            rejectReason: '',
        },
        {
            image: '/src/assets/images/computer1.png',
            comments: 'The submission doesn\'t meet the requirements.',
            status: 'Rejected',
            updateDate: '31/05/2024',
            approver: '@Admin',
            rejectReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex augue, malesuada id sem at, pretium egestas est.',
        },
    ]);

    const concerns = [
        {
            concern: "There are concerns regarding the accuracy of the data provided.",
            document: "doc.pdf",
            updateDate: "31/05/2024",
        },
        {
            concern: "There are concerns regarding the accuracy of the data provided.",
            document: "doc.pdf",
            updateDate: "31/05/2024",
        },
        {
            concern: "There are concerns regarding the accuracy of the data provided.",
            document: "doc.pdf",
            updateDate: "31/05/2024",
        },
    ];

    const [text, setText] = useState("Approved, everything is in order.");
    const [showModal, setShowModal] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const modalRef = useRef(null);

    const handleAccept = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].status = 'Approved';
        setProducts(updatedProducts);
    };

    const handleReject = (index) => {
        setSelectedItem(index);
        setShowModal(true);
    };

    const confirmReject = () => {
        if (rejectReason.trim() === "") {
            setSnackbarOpen(true);
            return;
        }

        if (selectedItem !== null) {
            const updatedProducts = [...products];
            updatedProducts[selectedItem].status = 'Rejected';
            updatedProducts[selectedItem].rejectReason = rejectReason;
            setProducts(updatedProducts);
            setShowModal(false);
            setRejectReason("");
            setSelectedItem(null);
        }
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
            setRejectReason("");
            setSelectedItem(null);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const getCommentStyles = (status) => {
        switch (status) {
            case 'In Review':
                return 'italic text-xs';
            case 'Approved':
            case 'Rejected':
                return 'text-[10px]';
            default:
                return 'text-xs';
        }
    };

    const handleChange = (event) => {
        setText(event.target.value); // Update the state with the new value
    };

    const [isOn, setIsOn] = useState(false);

    // Toggle function
    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <Link to="/status/districts/dehradun/vikasnagar/gic_nakot/infrastructure_summary/hardware_summary/computers" className="font-nunito flex items-center gap-2 text-[15px] font-bold text-[#B6B6B6] hover:underline cursor-pointer">
                <FaArrowLeft size={13} />
                Infrastructure Summary / Hardware Summary / Computers / Zebronics Zeb256 Desktop
            </Link>
            <p className="text-32 font-nunito font-bold pt-7">Zebronics Zeb256 Desktop</p>
            <div className="md:flex informations font-inter gap-10">
                <div className="general_information text-sm border-[#B9B9B9] border rounded-2xl w-full lg:w-2/3">
                    <div className="info_header bg-[#FCFDFD] border-[#D5D5D5] border-b px-4 h-[50px] rounded-tl-2xl rounded-tr-2xl flex items-center">
                        <p className="font-extrabold font-nunito">General Information</p>
                    </div>
                    <div className="info bg-white px-4 pt-4 pb-6 rounded-bl-2xl rounded-br-2xl">
                        <p className="district font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>Barcode:</span> 156785454564665</p>
                        <p className="block font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>Specification:</span> 8 GB RAM / Black</p>
                        <p className="udise_id font-normal pb-1 text-[#4D4D4D]"><span className='font-medium text-[#171A1F]'>UDISE ID:</span> 12154582213</p>
                    </div>
                </div>
                <div className="verification_status text-sm border-[#B9B9B9] border rounded-2xl w-full lg:w-1/3 mt-6 md:mt-0">
                    <div className="info_header bg-[#FCFDFD] border-[#D5D5D5] border-b px-4 h-[50px] rounded-tl-2xl rounded-tr-2xl flex justify-between items-center">
                        <p className="font-extrabold font-nunito">Verification Status</p>

                        {/* Toggle Button */}
                        <button
                            onClick={handleToggle}
                            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-green-500" : "bg-gray-300"
                                }`}
                        >
                            {/* ON/OFF Text */}
                            <span
                                className={`absolute left-[9px] text-[11px] font-extrabold text-white transition-opacity duration-300 ${isOn ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                ON
                            </span>
                            <span
                                className={`absolute right-2 text-[11px] font-extrabold text-white transition-opacity duration-300 ${isOn ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                OFF
                            </span>

                            {/* Slider */}
                            <div
                                className={`w-5 h-5 bg-white rounded-full shadow-md transform ${isOn ? "translate-x-7" : "translate-x-0"
                                    } transition-transform duration-300`}
                            />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="info bg-white px-7 py-7 rounded-bl-2xl rounded-br-2xl">
                        <Dropdown />
                    </div>
                </div>
            </div>
            <p className="text-[25px] font-nunito font-bold pt-14">Approver&apos;s comments</p>
            <div className="mx-auto pb-4 pt-3 px-4 bg-white rounded-md border border-[#3F435029]">
                <textarea
                    className="w-full focus:outline-none text-sm font-normal text-[#3F4350A3] resize-none"
                    rows="3"
                    value={text}
                    placeholder="Update comment..."
                    onChange={handleChange}
                />
                <div className="flex justify-end">
                    <button
                        className="mt-4 font-nunito py-2 px-10 bg-[#563091] font-bold text-xs text-white rounded-md focus:outline-none"
                    >
                        Update
                    </button>
                </div>
            </div>
            <p className="text-[25px] font-nunito font-bold pt-10">Photos / Videos</p>
            <div className="overflow-x-auto mb-5 bg-white border border-[#B9B9B9] rounded-lg font-nunito pb-10">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-[#FCFDFD]">
                            {['Photo/Video', 'Comments', 'Current Status', 'Updates', 'Approver', 'Action'].map((header) => (
                                <th
                                    key={header}
                                    className={`px-6 py-4 text-sm font-bold text-[#202224] border-b border-[#D5D5D5] ${header === 'Action' ? 'text-right pr-24' : 'text-left'
                                        }`}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 border-b border-[#D5D5D5]"
                            >
                                <td className="px-6 py-3 text-left">
                                    <img
                                        src={product.image}
                                        alt="Project"
                                        className="min-w-[85px] h-[85px]"
                                    />
                                </td>
                                <td className={`px-6 py-5 text-[#494949] text-left align-top font-inter ${getCommentStyles(product.status)}`}>
                                    {product.comments}
                                </td>
                                <td className="px-6 py-3 text-left">
                                    <span
                                        className={`inline-block min-w-[60px] px-1 py-1 text-xs text-center font-semibold rounded ${product.status === 'Approved'
                                            ? 'text-[#00B69B] bg-[#ccf0eb]'
                                            : product.status === 'In Review'
                                                ? 'text-[#E3D61D] bg-[#F9F7D2]'
                                                : product.status === 'Rejected'
                                                    ? 'text-[#FF0004] bg-[#fad3d3]'
                                                    : ''
                                            }`}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-sm text-[#202224] text-left">{product.updateDate}</td>
                                <td className="px-6 py-3 text-sm text-[#202224] text-left">{product.approver}</td>
                                <td className="pr-6 pl-6 lg:pl-0 py-3 text-right">
                                    {product.status === 'In Review' && (
                                        <>
                                            <button
                                                onClick={() => handleReject(index)}
                                                className="text-[#FF3C3C] text-xs font-bold mr-2 px-6 py-1 border-2 border-[#FF3C3C] rounded-2xl"
                                            >
                                                Reject
                                            </button>
                                            <button
                                                onClick={() => handleAccept(index)}
                                                className="text-[#00B69B] text-xs font-bold ml-2 px-3 py-1 border-2 border-[#00B69B] rounded-2xl"
                                            >Accept<img src="/src/assets/images/green-tick.svg" alt="tick" className="pl-3 inline align-baseline" /></button>
                                        </>
                                    )}
                                    {product.status === 'Approved' && (
                                        <button className="text-[#00B69B] text-xs font-bold px-4 py-1 border-2 border-[#00B69B] rounded-2xl">
                                            Accepted
                                        </button>
                                    )}
                                    {product.status === 'Rejected' && (
                                        <div className="flex flex-col items-end py-1">
                                            <span className="text-[10px] text-[#494949] italic font-inter text-right max-w-[255px] whitespace-normal break-words">
                                                {product.rejectReason}
                                            </span>
                                            <button className="text-[#FF3C3C] text-xs font-bold px-4 py-1 mt-3 border-2 border-[#FF3C3C] rounded-2xl">
                                                Rejected
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-[25px] font-nunito font-bold pt-10">Concerns</p>
            <div className="overflow-x-auto mb-7 bg-white border border-[#B9B9B9] rounded-lg font-nunito">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-[#FCFDFD]">
                            <th className="px-6 py-4 text-sm font-extrabold text-[#202224] border-b border-[#D5D5D5] text-left w-10/12">
                                Concerns
                            </th>
                            <th className="px-6 py-4 text-sm font-extrabold text-[#202224] border-b border-[#D5D5D5] text-left w-2/12">
                                Document
                            </th>
                            <th className="px-6 py-4 text-sm font-extrabold text-[#202224] border-b border-[#D5D5D5] text-left w-1/12">
                                Updates
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {concerns.map((item, index) => (
                            <tr key={index}
                                className={`hover:bg-gray-50 ${index !== concerns.length - 1 ? "border-b border-[#D5D5D5]" : ""}`}>
                                <td className="px-6 py-8 italic text-xs font-inter font-normal text-[#494949]">
                                    {item.concern}
                                </td>
                                <td className="px-6 py-8 text-xs text-[#202224]">
                                    <button className="bg-[#E0F9F6] text-[#20C6C2] font-bold px-5 py-1 rounded-md">
                                        {item.document}
                                    </button>
                                </td>
                                <td className="px-6 py-8 text-sm font-semibold text-[#202224]">{item.updateDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-5 z-[99]"
                    onClick={handleOutsideClick}
                >
                    <div className="modal font-inter w-[663px]" ref={modalRef}>
                        <div className="bg-[#542F8E] font-bold text-[19px] font-inter text-white text-center py-4 rounded-t-lg">
                            Reject Reason
                        </div>
                        <div className="bg-white px-6 py-4 rounded-b-lg">
                            <p className="font-bold text-[18px] pb-3">Zebronics Zeb256 Desktop PC</p>
                            <textarea
                                className="focus:outline-none p-3 mb-3 text-xs font-normal w-full text-[#2D2D2D] border border-[#F4F4F4] resize-none bg-[#FBFBFB] rounded-md"
                                rows="3"
                                placeholder="Please enter your reject reason..."
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                            />
                            <div className="btns flex justify-end gap-4 pb-2">
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setRejectReason("");
                                        setSelectedItem(null);
                                    }}
                                    className="bg-[#FBFBFB] text-xs text-[#4F4F4F] border border-[#F4F4F4] font-normal px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmReject}
                                    className="bg-[#494949] text-xs text-[#FFF] border border-[#F4F4F4] font-normal px-4 py-2 rounded-md"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                autoHideDuration={3000} // Dismiss after 3 seconds
                key="topcenter"
                className='mx-5 mt-2'
                ContentProps={{
                    style: {
                        backgroundColor: 'white', // Set the background color to white
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        color: 'red', // Set text color to red
                    },
                }}
                message={<span>Please provide a reason for rejection !</span>}
            />
        </>
    );
};

export default Product;
