import { FaArrowLeft } from "react-icons/fa";

const Software = ({handleParagraphClick}) => {

  return (
    <div>
      <p onClick={handleParagraphClick} className="font-nunito flex mt-8 items-center gap-2 text-[15px] font-bold text-[#B6B6B6] hover:underline cursor-pointer"><FaArrowLeft size={13} />Infrastructure Summary / Software Summary</p>
    </div>
  )
}

export default Software
