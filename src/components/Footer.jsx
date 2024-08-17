import Container from "./Container";
import technicalPhoto from "./../assets/images/technical.png";
import facebookLogo from "./../assets/images/facebook.png";
import twitterLogo from "./../assets/images/twitter.png";
import youtubeLogo from "./../assets/images/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 text-gray-200 text-sm py-14">
        <Container>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col space-y-2 items-center md:items-start pb-6 md:pb-0">
              <h3 className="text-base sm:text-lg font-semibold text-center pb-3">
                প্রয়োজনীয় লিংক
              </h3>
              <a className="hover:underline" href="#">
                সাইটম্যাপ
              </a>
              <a className="hover:underline" href="#">
                গোপনীয়তার নীতিমালা
              </a>
              <a className="hover:underline" href="#">
                যোগাযোগ
              </a>
              <a className="hover:underline" href="#">
                সচরাচর জিজ্ঞাসা
              </a>
              <a className="hover:underline" href="#">
                ব্যবহারের শর্তাবলি
              </a>
            </div>

            <div className="space-y-5 text-center">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-center pb-3">
                  সামাজিক যোগাযোগ
                </h3>
                <div className="flex gap-4 justify-center">
                  <img
                    className="size-8"
                    src={facebookLogo}
                    alt="Facebook Logo"
                  />
                  <img
                    className="size-8"
                    src={twitterLogo}
                    alt="Twitter Logo"
                  />
                  <img
                    className="size-8"
                    src={youtubeLogo}
                    alt="Youtube Logo"
                  />
                </div>
              </div>

              <div>
                <p>
                  পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি,
                  ডিওআইসিটি ও বেসিস।
                </p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <p>কারিগরি সহায়তায়:</p>
                <img src={technicalPhoto} alt="Technical logo" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-600 text-gray-200 text-sm text-center p-2">
        <p>সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৭ ০৭ :৩৭:৪০</p>
      </div>
    </>
  );
};

export default Footer;
