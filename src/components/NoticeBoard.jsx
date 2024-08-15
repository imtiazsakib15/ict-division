import { FaArrowRight } from "react-icons/fa";

const NoticeBoard = () => {
  return (
    <div className="border p-5">
      <h3 className="text-lg sm:text-xl font-semibold">নোটিশ বোর্ড</h3>
      <div className="pt-4 space-y-1">
        <a href="#" className="flex items-center gap-2 hover:text-[#84154D]">
          <FaArrowRight />
          প্রজ্ঞাপন (চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী প্রোগ্রামার...
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#84154D]">
          <FaArrowRight />
          অফিস আদেশ (দায়িত্ব বণ্টন)
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#84154D]">
          <FaArrowRight />
          ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#84154D]">
          <FaArrowRight />
          e-Tender For “Procurement of Food and Refreshment for Aspire...
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#84154D]">
          <FaArrowRight />
          অফিস আদেশ (জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)
        </a>
      </div>
      <div className="text-end">
        <button className="px-3 py-1 bg-[#84154D] text-white mt-4">
          সকল নোটিশ
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
