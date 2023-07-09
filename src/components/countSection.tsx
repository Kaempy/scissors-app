import Container from '../shared/container';

const CountSection = () => {
  return (
    <Container className="bg-section flex items-center justify-around py-8 max-w-full">
      <h2 className="text-[2.5rem] text-left leading-[3rem]">
        One Stop.
        <br />
        Four &nbsp;
        <span className="text-primary">Possibilities.</span>
      </h2>
      <div className="flex gap-[4.5rem] justify-evenly items-center  text-left">
        <div>
          <h3 className="text-[2rem] leading-[2.5rem]">3M</h3>
          <p className="text-base">Active users</p>
        </div>
        <div>
          <h3 className="text-[2rem] leading-[2.5rem]">60M</h3>
          <p className="text-base">
            Links & QR <br /> codes created
          </p>
        </div>
        <div>
          <h3 className="text-[2rem] leading-[2.5rem]">1B</h3>
          <p className="text-base">
            Clicked & Scanned <br /> connections
          </p>
        </div>
        <div>
          <h3 className="text-[2rem] leading-[2.5rem]">300K</h3>
          <p className="text-base">App Integration</p>
        </div>
      </div>
    </Container>
  );
};

export default CountSection;
