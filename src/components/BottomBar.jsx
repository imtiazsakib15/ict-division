import Container from "./Container";
import NationalAnthem from "./NationalAnthem";
import VisitorCounter from "./VisitorCounter";

const BottomBar = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <NationalAnthem />
          <VisitorCounter />
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
