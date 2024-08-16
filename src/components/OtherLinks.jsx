import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";
import eDirectoryPhoto from "./../assets/images/e_directory.png";
import digitalServicesPhoto from "./../assets/images/digital_services.png";
import mygovPhoto from "./../assets/images/mygov.png";
import bridgeTollPhoto from "./../assets/images/bridge_toll.png";
import centralEServicesPhoto from "./../assets/images/central_e_services.png";
import officeAttachmentPhoto from "./../assets/images/office_attachment.png";

const OtherLinks = () => {
  return (
    <div className="pb-8">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              অভ্যন্তরীণ ই-সেবাসমূহ
            </h3>
            <div className="pt-4 space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                ওয়েব মেইল
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                বৃত্তি ও আইসিটি উদ্ভাবনী অনুদান
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                ন্যাশনাল এন্টারপ্রাইজ আর্কিটেকচার
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                সিআইআরটি
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                অনলাইন নিয়োগ সিস্টেম
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                ওয়ান স্টপ সার্ভিস (বাংলাদেশ হাইটেক পার্ক কর্তৃপক্ষ)
              </a>
            </div>
            <button className="bg-[#84154D] text-white px-4 py-2 mt-4">
              সকল
            </button>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              গুরুত্বপূর্ণ লিংক
            </h3>
            <div className="pt-4 space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                রাষ্ট্রপতির কার্যালয়
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                প্রধানমন্ত্রীর কার্যালয়
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                মন্ত্রিপরিষদ বিভাগ
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                বাংলাদেশ কর্মচারী কল্যাণ বোর্ড
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                প্রাথমিক ডিজিটাল কন্টেন্ট
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#84154D] max-w-max"
              >
                <FaArrowRight />
                জাতীয় পোর্টাল
              </a>
            </div>
            <button className="bg-[#84154D] text-white px-4 py-2 mt-4">
              সকল লিংক
            </button>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">অন্যান্য</h3>
            <div className="pt-4 flex flex-col gap-2">
              <a href="#">
                <img src={eDirectoryPhoto} alt="Hotline Numbers" />
              </a>
              <a href="#">
                <img src={digitalServicesPhoto} alt="Hotline Numbers" />
              </a>
              <a href="#">
                <img src={mygovPhoto} alt="Hotline Numbers" />
              </a>
              <a href="#">
                <img src={bridgeTollPhoto} alt="Hotline Numbers" />
              </a>
              <a href="#">
                <img src={centralEServicesPhoto} alt="Hotline Numbers" />
              </a>
              <a href="#">
                <img src={officeAttachmentPhoto} alt="Hotline Numbers" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OtherLinks;
