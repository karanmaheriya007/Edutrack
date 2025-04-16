import { useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

// Register Chart.js components
ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    const [selectedMonth, setSelectedMonth] = useState("October");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const data = {
        labels: Array.from({ length: 30 }, (_, i) => i + 1), // Days 1-30
        datasets: [
            {
                label: "Concerns",
                data: [
                    100, 120, 150, 230, 200, 130, 190, 220, 435, 180, 250, 270, 200, 280, 300,
                    120, 110, 240, 210, 350, 290, 310, 300, 270, 220, 290, 280, 270, 290, 300,
                ],
                borderColor: "#3b82f6", // Blue line
                backgroundColor: "rgba(59, 130, 246, 0.1)", // Light blue area shadow
                pointBackgroundColor: "#3b82f6", // Points on the graph
                pointBorderColor: "#fff",
                pointHoverRadius: 6,
                pointRadius: 4,
                tension: 0, // Straight lines
                fill: true, // Enables shadow under the graph line
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false }, // Remove vertical grid lines
            },
            y: {
                grid: { color: "#e5e7eb" }, // Light grey horizontal grid lines
                beginAtZero: true,
                ticks: { stepSize: 100 },
            },
        },
        plugins: {
            legend: { display: false }, // Hide legend
            tooltip: {
                displayColors: false, // Remove the box color beside the tooltip
                position: "nearest", // Positions the tooltip near the active point
                yAlign: "bottom", // Aligns the tooltip above the dot
                callbacks: {
                    label: function (context) {
                        return context.raw; // Show only the score in tooltip
                    },
                },
                backgroundColor: "#3b82f6",
                titleFont: { size: 0 }, // Remove tooltip title
                bodyFont: { size: 12 },
                bodyColor: "#fff",
                padding: { top: 3, bottom: 3, left: 15, right: 15 }, // Reduce space (top & bottom)
            },
        },
        elements: {
            line: {
                borderWidth: 2, // Line thickness
            },
        },
        interaction: {
            mode: "index", // Tooltip follows the index
            intersect: false,
        },
    };

    return (
        <div className="mx-auto lg:my-8 my-5 p-5 py-8 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-[#202224]">Concerns</h2>
                <div>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="border border-[#D5D5D5] rounded-md px-1 py-1 text-[#A8AbAd] text-xs bg-[#FCFDFD]"
                    >
                        {months.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="h-80">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
