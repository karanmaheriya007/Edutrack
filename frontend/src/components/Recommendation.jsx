const Recommendation = () => {
  const products = [
    {
      id: 1,
      title: "Zebronics Zeb256 Desktop",
      description: "Interactive laptop for better software use",
      imageUrl: "/images/computer5.png", // Replace with your image URL
    },
    {
      id: 2,
      title: "Lenovo Tab",
      description:
        "Bring this fascinating product with you so it can boost your output and keep you entertained all the while you’re out and about",
      imageUrl: "/images/tablet.png", // Replace with your image URL
    },
  ];

  return (
    <div className="font-nunito">
      <p className="text-32 font-bold pt-5">Recommendation</p>
      {/* Main Container */}
      <div className="bg-gray-100 py-6">
        <div className="bg-white rounded-lg border border-[#B9B9B9] overflow-hidden font-inter">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-center p-7 ${
                index !== products.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full md:w-28 h-40 md:h-28 object-cover rounded-md"
              />
              {/* Product Content */}
              <div className="mt-4 md:mt-0 md:ml-8 text-left">
                <h3 className="text-lg md:text-[29px] font-medium text-black">
                  {product.title}
                </h3>
                <p className="text-[#494949] font-normal text-base italic mt-2 max-w-[653px]">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
