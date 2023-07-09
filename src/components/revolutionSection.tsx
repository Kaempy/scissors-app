import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Container from '../shared/container';

const RevolutionSection = () => {
  return (
    <Container className="my-12 py-10 max-w-full bg-div">
      <h6 className="mb-4 text-white text-[2.5rem] leading-[3rem]">
        Revolutionizing Link Optimization
      </h6>
      <Button className="mx-auto" color="primary" pill>
        <Link to="/auth/signup">Get Started</Link>
      </Button>
    </Container>
  );
};

export default RevolutionSection;
