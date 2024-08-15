import Container from "./Container";
import nahidIslamPhoto from "./../assets/images/nahid_islam.jpg";
import shamsulArefinPhoto from "./../assets/images/shamsul_arefin.jpg";
import NoticeBoard from "./NoticeBoard";

const ImageAndNotice = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <NoticeBoard />
          </div>
          <div className="flex justify-center gap-6 sm:gap-10 lg:gap-6">
            <a href="#" className="text-center space-y-2">
              <img
                className="max-w-32 sm:max-w-40 mx-auto aspect-[4/5]"
                src={nahidIslamPhoto}
                alt="Nahid Islam's Photo"
              />
              <p>জনাব মোঃ নাহিদ ইসলাম</p>
              <p className="font-semibold text-[#84154D] pb-2">
                মাননীয় উপদেষ্টা
              </p>
            </a>
            <a href="#" className="text-center space-y-2">
              <img
                className="max-w-32 sm:max-w-40 mx-auto aspect-[4/5]"
                src={shamsulArefinPhoto}
                alt="Shamsul Arefin's Photo"
              />
              <p>জনাব মোঃ সামসুল আরেফিন</p>
              <h4 className="font-semibold text-[#84154D] pb-2">সচিব</h4>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageAndNotice;
