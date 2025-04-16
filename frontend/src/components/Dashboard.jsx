import Graph from "./Graph"

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_container font-nunito">
        <div className="header md:flex justify-between pt-5">
          <p className="text-32 font-bold">Dashboard</p>
          {/* <button className="bg-[#563091] text-white px-10 py-3 rounded-lg mt-3 md:mt-0 text-sm">+ Add School</button> */}
        </div>
        <div className="pt-5 md:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col gap-8">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-5">
                  <span className="text-base font-semibold text-[#202224]">Total School</span>
                  <div className="text-3xl font-bold text-gray-900">558</div>
                </div>
                <img src="/images/users.svg" alt="Users" />
              </div>
              <div className="flex items-center text-base text-[#606060] font-semibold">
                <img src="/images/up.svg" alt="Up" className="w-5 h-5 mr-3" />
                <p><span className="text-[#00B69B]">8.5%</span> Up from last month</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col gap-8">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-5">
                  <span className="text-base font-semibold text-[#202224]">Hardware Score</span>
                  <div className="text-[28px] font-bold text-[#202224]">4</div>
                </div>
                <img src="/images/box.svg" alt="Box" />
              </div>
              <div className="flex items-center text-base text-[#606060] font-semibold">
                <img src="/images/up.svg" alt="Up" className="w-5 h-5 mr-3" />
                <p><span className="text-[#00B69B]">1.3%</span> Up from past week</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col gap-8">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-5">
                  <span className="text-base font-semibold text-[#202224]">Software Score</span>
                  <div className="text-[28px] font-bold text-[#202224]">3</div>
                </div>
                <img src="/images/graph.svg" alt="Graph" />
              </div>
              <div className="flex items-center text-base text-[#606060] font-semibold">
                <img src="/images/down.svg" alt="Down" className="w-5 h-5 mr-3" />
                <p><span className="text-[#F93C65]">20%</span> Down from yesterday</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col gap-8">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-5">
                  <span className="text-base font-semibold text-[#202224]">Internet & Power</span>
                  <div className="text-[28px] font-bold text-[#202224]">2</div>
                </div>
                <img src="/images/time.svg" alt="Timing" />
              </div>
              <div className="flex items-center text-base text-[#606060] font-semibold">
                <img src="/images/up.svg" alt="Up" className="w-5 h-5 mr-3" />
                <p><span className="text-[#00B69B]">1.8%</span> Up from yesterday</p>
              </div>
            </div>
          </div>
        </div>
        <Graph />
      </div>
    </>
  )
}

export default Dashboard
