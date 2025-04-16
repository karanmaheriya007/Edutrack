import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Shopinfo from "./Shopinfo";

const products = [
    {
        image: '/images/computer1.png',
        name: 'Zebronics Zeb256 Desktop',
        info: '8GB/RAM',
        status: 'Approved',
        updateDate: '31/05/2024',
        approver: '@Admin',
        barcode: '1567854545464665'
    },
    {
        image: '/images/computer2.png',
        name: 'Zebronics Zeb256 Desktop',
        info: '8GB/RAM',
        status: 'In Review',
        updateDate: '31/05/2024',
        approver: '@Admin',
        barcode: '1567854545464665'
    },
    {
        image: '/images/computer3.png',
        name: 'Mac book M1',
        info: '8GB/RAM',
        status: 'Rejected',
        updateDate: '31/05/2024',
        approver: '@Admin',
        barcode: '1567854545464665'
    },
    {
        image: '/images/noimg.png',
        name: 'Zebronics Zeb256 Desktop',
        info: '8GB/RAM',
        status: 'Pending Image',
        updateDate: '31/05/2024',
        approver: '@Admin',
        barcode: '1567854545464665'
    }
];

const Products = () => {

    const navigate = useNavigate();

    const handleRowClick = () => {
        const url = `zebronics_zeb256_desktop`;
        navigate(url);
    };

    return (
        <>
            <Shopinfo />
            <Link to="/status/districts/dehradun/vikasnagar/gic_nakot/infrastructure_summary/hardware_summary" className="font-nunito flex mt-8 items-center gap-2 text-[15px] font-bold text-[#B6B6B6] hover:underline cursor-pointer">
                <FaArrowLeft size={13} />
                Infrastructure Summary / Hardware Summary / Computers
            </Link>
            <p className="text-32 font-bold font-nunito">Computers</p>
            <div className="overflow-x-auto my-7 bg-white border border-[#B9B9B9] rounded-lg font-nunito">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-[#FCFDFD]">
                            {['Image', 'Product Name', 'Information', 'Status', 'Updates', 'Approver', 'Action'].map((header) => (
                                <th
                                    key={header}
                                    className={`px-6 py-4 text-sm font-bold text-[#202224] border-b border-[#D5D5D5]  ${header === 'Status' ? 'text-center pl-0' : header === 'Image' || header === 'Action'
                                        ? 'text-center'
                                        : header === 'Product Name' ? 'text-left lg:pr-0 pr-4' : 'text-left'}`}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className={`hover:bg-gray-50 cursor-pointer ${index !== products.length - 1 ? 'border-b border-[#D5D5D5]' : ''
                                }`} onClick={() => handleRowClick()}>
                                <td className="px-6 py-5">
                                    <img src={product.image} alt={product.name} className="min-w-[60px] h-[60px] mx-auto" />
                                </td>
                                <td className="pl-6 lg:pr-0 pr-4 py-5 text-sm font-semibold">
                                    <div>
                                        <p className="text-[#000000] font-medium text-[15px]">{product.name}</p>
                                        <p className="text-xs text-[#494949] italic">Barcode: {product.barcode}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-sm font-semibold text-[#202224]">{product.info}</td>
                                <td className="pr-7 py-3 text-center">
                                    <button
                                        className={`inline-block min-w-[60px] px-1 py-1 text-xs rounded font-semibold ${product.status === "Approved" || product.status === "Pending Image"
                                            ? "text-[#00B69B] bg-[#ccf0eb]"
                                            : product.status === "In Review"
                                                ? "text-[#FD9A56] bg-[#ffebdd]"
                                                : product.status === "Rejected"
                                                    ? "text-[#FF0004] bg-[#fad3d3]"
                                                    : "text-[#5A8CFF] bg-[#dce8ff]"
                                            }`}
                                    >
                                        {product.status}
                                    </button>
                                </td>
                                <td className="px-6 py-5 text-sm font-semibold text-[#202224]">{product.updateDate}</td>
                                <td className="px-6 py-5 text-sm font-semibold text-[#202224]">{product.approver}</td>
                                <td className="px-6 py-5 text-center">
                                    <div className="bg-[#FAFBFD] border border-[#D5D5D5] w-fit m-auto px-3 py-2 cursor-pointer rounded-lg">
                                        <img
                                            src="/src/assets/images/pencil-write.svg"
                                            width={15}
                                            alt="Edit"
                                            className="mx-auto"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Products;
