import { BiMenu } from "react-icons/bi";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-[#84154D] py-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              আমাদের সম্পর্কিত
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
            >
              <div className="lg:flex lg:gap-5 p-4">
                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">
                    বিভাগ পরিচিতি
                  </h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        ইতিহাস ও কার্যাবলি
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        ভিশন ও মিশন
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        মাননীয় উপদেষ্টা
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        প্রাক্তন মন্ত্রীগণের তালিকা
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        সচিব
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        প্রাক্তন সচিবগণের তালিকা
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        সাংগঠনিক কাঠামো
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        এলোকেশন অব বিজনেস
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        প্রধান কার্যাবলী
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        কর্মবণ্টন
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        প্রতিনিধি মনোনয়ন
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">জনবল</h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        কর্মকর্তাবৃন্দ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        কর্মবণ্টন
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        তথ্য প্রদানকারী কর্মকর্তা
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        অভিযোগ নিষ্পত্তি কর্মকর্তা
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        ফোকাল পয়েন্ট কর্মকর্তাগণ
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">
                    বিভাগের সেবাসমূহ
                  </h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        সেবা প্রদান প্রতিশ্রুতি
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        নাগরিক ই-সেবাসমূহের তালিকা
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">
                    মন্ত্রণালয়/বিভাগের কমিটিসমূহ
                  </h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1 w-min">
                        মাননীয় প্রধানমন্ত্রী এবং মাননীয় মন্ত্রীর সভাপতিত্বে
                        মন্ত্রণালয়/বিভাগ সম্পর্কিত কমিটিসমূহ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              অধীনস্থ দপ্তর/অফিস/সংস্থা
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-6 shadow"
            >
              <li>
                <a href="#" className="px-2 py-1">
                  দপ্তর/অফিস/সংস্থার তালিকা
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              প্রকল্প/কর্মসূচি
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
            >
              <div className="lg:flex lg:gap-5 p-4">
                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">
                    উন্নয়ন প্রকল্পসমূহ
                  </h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        চলমান প্রকল্প
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        ক্রয় পরিকল্পনা
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-2 py-1">
                        সমাপ্ত প্রকল্পসমূহ
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">
                    কর্মসূচিসমূহ
                  </h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        সমাপ্ত কর্মসূচিসমূহ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              গ্যালারি
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-6 shadow"
            >
              <li>
                <a href="#" className="px-2 py-1">
                  ফটো গ্যালারি
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ভিডিও গ্যালারি
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              আইন/নীতিমালা
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-6 shadow right-0"
            >
              <li>
                <a href="#" className="px-2 py-1">
                  আইন ও বিধি
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  নীতিমালা
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  নির্দেশিকা ও কৌশলপত্র
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  খসড়া আইন, বিধি এবং নীতিমালা
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              ই-সেবা
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-6 shadow right-0"
            >
              <li>
                <a href="#" className="px-2 py-1">
                  ইনোভেশন ইনফরমেশন সিস্টেম
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  নৈমিত্তিক ছুটি ব্যবস্থাপনা
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  স্মার্ট ড্যাশবোর্ড
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ফ্রিল্যান্সার আইডি
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ফেলোশিপ ও বৃত্তি এর আবেদন
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ই-নথি
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ওয়েব মেইল
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  অনলাইনে বেতন দাখিল
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ই-টেন্ডারিং(e-GP)
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  আমার সরকার
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  GRP
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  প্রকল্প মনিটরিং সিস্টেম
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  অনলাইন এসিআর দাখিল
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  অনলাইন নিয়োগ পোর্টাল
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-1">
                  ইমপোরিয়া
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-white m-1">
              যোগাযোগ ও মতামত
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow right-0"
            >
              <div className="lg:flex lg:gap-5 p-4">
                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">যোগাযোগ</h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        অফিসের ঠিকানা
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-max">
                  <h5 className="font-semibold text-[#84154D] pb-1">মতামত</h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#" className="px-2 py-1">
                        আপনার জিজ্ঞাসা ও মতামত
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
