import Container from "./Container";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { LINKS } from "../constants/link.constant";

const AllNecessaryLinks = () => {
  return (
    <div className="pb-8">
      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {LINKS.map((link) => (
            <div
              key={link.heading}
              className="group relative border px-5 py-12 cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-center">
                {link.heading}
              </h3>
              <img
                className="mx-auto max-w-32 pt-6"
                src={link.image}
                alt="About Us Photo"
              />
              <div className="hidden group-hover:flex group-hover:justify-center group-hover:items-center absolute left-0 top-0 bg-[#84154D] size-full p-5">
                <div className="pt-4 space-y-1 text-white">
                  <div className="animate-bounce text-lg w-max p-3 rounded-full bg-white text-[#84154D] mx-auto mb-2">
                    <FaArrowDown />
                  </div>
                  {link.links.map((singleLink) => (
                    <a
                      key={singleLink}
                      href="#"
                      className="flex items-center gap-2"
                    >
                      <FaArrowRight />
                      {singleLink}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default AllNecessaryLinks;
