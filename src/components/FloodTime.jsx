import Container from "./Container";
import denguPhoto from "./../assets/images/dengu.jpg";

const FloodTime = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              বন্যার সময় কি করণীয়
            </h3>
            <iframe
              className="w-full aspect-video pt-4"
              src="https://www.youtube.com/embed/GT9ShGE_qjg?si=haXl0m9vn0EoGBOT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              ডেঙ্গু প্রতিরোধে করণীয়
            </h3>
            <a href="#">
              <img src={denguPhoto} alt="Dengu" className="pt-4 w-full" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FloodTime;
