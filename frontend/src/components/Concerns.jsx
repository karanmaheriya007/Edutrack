const Concerns = () => {

  const products = [
    {
      id: 1,
      image: "/src/assets/images/computer1.png",
      name: "Zebronics Zeb256 Desktop",
      barcode: "156785454564665",
      concern: 2,
      school: "GIC Nakot",
      block: "Vikasnagar",
      district: "Dehradun",
      updates: "06/11/2024",
    },
    {
      id: 2,
      image: "/src/assets/images/computer2.png",
      name: "Mac Book",
      barcode: "156785454564665",
      concern: 50,
      school: "GIC Nakot",
      block: "Vikasnagar",
      district: "Dehradun",
      updates: "06/11/2024",
    },
    {
      id: 3,
      image: "/src/assets/images/computer1.png",
      name: "Dell work station",
      barcode: "156785454564665",
      concern: 2,
      school: "GIC Nagani",
      block: "Vikasnagar",
      district: "Dehradun",
      updates: "06/11/2024",
    },
    {
      id: 4,
      image: "/src/assets/images/computer1.png",
      name: "HP Desktop",
      barcode: "156785454564665",
      concern: 2,
      school: "GHS Khand",
      block: "Vikasnagar",
      district: "Dehradun",
      updates: "06/11/2024",
    },
    {
      id: 5,
      image: "/src/assets/images/computer1.png",
      name: "Hp tochpad",
      barcode: "156785454564665",
      concern: 2,
      school: "GIC Nakot",
      block: "Vikasnagar",
      district: "Dehradun",
      updates: "06/11/2024",
    },
  ];

  return (
    <>
      <div className="header md:flex justify-between font-nunito">
        <p className="text-32 font-bold pt-5">Concerns</p>
      </div>
      <div className="flex bg-[#F9F9FB] border-[#D5D5D5] md:w-fit border h-[70px] overflow-x-scroll custom-scrollbar mt-8 rounded-xl font-nunito">
        <div className="filter_img h-full px-6 flex items-center border-[#D5D5D5] border-r">
          <img src="/src/assets/images/filter.svg" className="min-w-[22px]" alt="" />
        </div>
        <div className="filter_text text-sm font-bold h-full px-6 flex items-center align-middle border-[#D5D5D5] border-r">
          <p className="font-nunito whitespace-nowrap">Filter By</p>
        </div>
        <div className="filter_drop1 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
          <select name="block" id="block" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
            <option value="block">Block</option>
            <option value="software">Software</option>
            <option value="internet_power">Internet & Power</option>
            <option value="district_id">District ID</option>
            <option value="district_name">District Name</option>
          </select>
        </div>
        <div className="filter_drop2 text-sm font-bold h-full px-6 flex items-center border-[#D5D5D5] border-r">
          <select name="is_vikasnagar" id="is_vikasnagar" className="min-w-[130px] bg-[#F9F9FB] cursor-pointer">
            <option value="is_vikasnagar">is Vikasnagar</option>
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
      <div className="overflow-x-auto mt-10 bg-white border border-[#B9B9B9] font-nunito rounded-lg">
        <table className="min-w-full border-collapse bg-white">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#FCFDFD]">
              {["Image", "Product Name", "Concern", "School", "Block", "District", "Updates", "Action"].map(
                (header, index) => (
                  <th
                    key={index}
                    className={`px-5 py-4 text-sm font-bold text-[#202224] border-b border-gray-300 ${["Action"].includes(header) ? "text-center" : "text-left"
                      }`}
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[#D5D5D5] hover:bg-gray-50 text-left h-[72px] last:border-b-0"
              >
                {/* Image */}
                <td className="px-5 py-5 text-left">
                  <img src={product.image} alt={product.name} width={60} className="object-cover rounded" />
                </td>

                {/* Product Name */}
                <td className="px-5 py-5 text-sm text-[#202224] text-left font-inter">
                  <div className="font-medium text-[15px] text-black">{product.name}</div>
                  <div className="text-xs text-[#494949] font-normal italic">Barcode: {product.barcode}</div>
                </td>

                {/* Concern */}
                <td className="px-5 py-5">
                  <button
                    className={`inline-block min-w-[60px] px-2 py-1 text-xs rounded font-semibold ${product.concern > 20
                        ? "text-[#FF0004] bg-[#fad3d3]"
                        : "text-[#00B69B] bg-[#ccf0eb]"
                      }`}
                  >
                    {product.concern}
                  </button>
                </td>

                {/* School */}
                <td className="px-5 py-5 font-semibold text-sm text-[#202224]">{product.school}</td>

                {/* Block */}
                <td className="px-5 py-5 font-semibold text-sm text-[#202224]">{product.block}</td>

                {/* District */}
                <td className="px-5 py-5 font-semibold text-sm text-[#202224]">{product.district}</td>

                {/* Updates */}
                <td className="px-5 py-5 font-semibold text-sm text-[#202224]">{product.updates}</td>

                {/* Action */}
                <td className="px-5 py-5 text-center">
                  <button className="bg-[#FAFBFD] border border-[#D5D5D5] px-3 py-2 rounded-lg">
                    <img src="/src/assets/images/topdown.svg" alt="View" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Concerns
