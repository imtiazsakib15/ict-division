import Container from "./Container";
import bdGov from "./../assets/images/bd-gov.png";
import bdFlag from "./../assets/images/bd-flag.png";
import { IoSearchSharp } from "react-icons/io5";

const Topbar = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center gap-5 py-5">
          <div className="flex items-center gap-2">
            <img
              className="h-14 sm:h-auto"
              src={bdGov}
              alt="ICT Division Logo"
            />
            <div className="hidden sm:block">
              <h3 className="text-lg md:text-xl font-semibold">
                তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
              </h3>
              <p className="text-sm">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
            </div>
          </div>
          <div className="relative">
            <input
              className="border rounded-full h-10 px-4 py-2 max-w-40 md:max-w-48 lg:max-w-52"
              type="text"
              placeholder="খুঁজুন"
            />
            <IoSearchSharp className="size-6 absolute right-2 top-2 cursor-pointer" />
          </div>
          <div>
            <img className="w-16 sm:w-24" src={bdFlag} alt="Bangladeshi Flag" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Topbar;
