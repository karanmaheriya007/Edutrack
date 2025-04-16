import { FaArrowLeft } from "react-icons/fa";
import Shopinfo from "./Shopinfo";
import { Link } from "react-router-dom";

const Hardware = () => {

    const productsData = [
        {
            id: 1,
            title: "5 IFPDs",
            image: "/src/assets/images/ifpd.png",
        },
        {
            id: 2,
            title: "12 Computers",
            image: "/src/assets/images/computer.png",
        },
        {
            id: 3,
            title: "3 Projectors",
            image: "/src/assets/images/projector.png",
        },
        {
            id: 4,
            title: "Tinkering Lab",
            image: "/src/assets/images/lab.png",
        }
    ];

    return (
        <>
            <Shopinfo />
            <div className="infrastructure_summary">
                <Link to="/status/districts/dehradun/vikasnagar/gic_nakot" className="font-nunito flex mt-8 items-center gap-2 text-[15px] font-bold text-[#B6B6B6] hover:underline cursor-pointer"><FaArrowLeft size={13} />Infrastructure Summary / Hardware Summary</Link>
                <p className="text-32 font-bold pb-5 font-nunito">Hardware Summary</p>
                <div className="infrastructure_section gap-8 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {productsData.map((item) => (
                        <div
                            key={item.id}
                            className="infrastructure bg-white rounded-xl shadow-md w-full"
                        >
                            <div className="flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain w-full"
                                />
                            </div>
                            <Link to="computers" className="flex items-center justify-center bg-[#563091] rounded-b-xl py-3 cursor-pointer">
                                <p className="text-2xl font-bold text-white pb-1 font-inter">{item.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hardware;