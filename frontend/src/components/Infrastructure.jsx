import { useNavigate } from "react-router-dom";

const Infrastructure = () => {

    const infrastructureData = [
        {
            id: 1,
            title: "Hardware",
            component: "Hardware",
            image: "/src/assets/images/computer.png",
            details: "Desktops: 50, Projectors: 10, Printers: 5",
            reviewDate: "24/08/2024",
            score: 5,
            scoreColor: "#00B69B",
            bgColor: "#ccf0eb"
        },
        {
            id: 2,
            title: "Software",
            component: "Software",
            image: "/src/assets/images/window.png",
            details: "Licenses: 30, Tools: 15",
            reviewDate: "24/08/2024",
            score: 5,
            scoreColor: "#FF0004",
            bgColor: "#fad3d3"
        },
        {
            id: 3,
            title: "Internet & Power",
            component: "Internet",
            image: "/src/assets/images/internet.png",
            details: "Licenses: 30, Tools: 15",
            reviewDate: "24/08/2024",
            score: 3,
            scoreColor: "#FD9A56",
            bgColor: "#ffebdd"
        }
    ];

    const navigate = useNavigate();

    const handleRowClick = () => {
        const url = `infrastructure_summary/hardware_summary`;
        navigate(url);
    };

    return (
        <>
            <div className="infrastructure_summary">
                <p className="text-32 font-bold py-6 font-nunito">Infrastructure Summary</p>
                <div className="infrastructure_section gap-8 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {infrastructureData.map((item) => (
                        <div
                            key={item.id}
                            className="infrastructure bg-white px-5 pb-8 rounded-xl shadow-md w-full"
                        >
                            <div className="flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-60 object-contain"
                                />
                            </div>
                            <div className="infrastructure_info font-inter pt-5">
                                <p className="text-2xl font-bold text-[#170D1C] pb-1">{item.title}</p>
                                <p className="text-sm font-normal text-[#676767] pb-1">{item.details}</p>
                                <p className="text-[#888888] text-[10px] pb-4">
                                    <i>Last review: {item.reviewDate}</i>
                                </p>
                                <div className="infrastructure_btns flex justify-between">
                                    <button className="font-medium text-sm text-[#170D1C] bg-[#DBCEF19C] rounded-md px-3 py-1 font-plus-jakarta" onClick={() => handleRowClick()}>
                                        View Details
                                    </button>
                                    <button
                                        className="px-2 py-1 text-xs rounded font-semibold font-nunito"
                                        style={{
                                            color: item.scoreColor,
                                            backgroundColor: item.bgColor
                                        }}
                                    >
                                        Score: {item.score}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Infrastructure;
