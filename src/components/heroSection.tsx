import { Button, Card } from 'flowbite-react';
import base from '../assets/base.svg';
import line from '../assets/line.svg';
import shadowCone from '../assets/shadow-cone.svg';
import urlPath from '../assets/url-path.svg';
import Container from '../shared/container';

const HeroSection = () => {
  return (
    <Container className="text-center max-w-5xl mx-auto">
      <h1 className="text-secondary text-5xl leading-[6rem]">
        Optimize Your Online Experience with Our <br /> Advanced &nbsp;
        <span className="text-primary relative">
          URL Shortening
          <img
            src={line}
            alt="text line"
            className="absolute left-1/4 -bottom-4"
          />
        </span>
        Solution
      </h1>
      <p className="text-secondary text-[1.125rem] leading-[1.75rem] mb-8 max-w-2xl mx-auto">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
      <div className="flex items-center justify-center mt-6 gap-4">
        <Button color="primary" pill>
          Sign up
        </Button>
        <Button color="default" pill>
          Learn more
        </Button>
      </div>
      <div className="mb-8">
        <div className="relative inset-0 transform translate-x-1/4 translate-y-1/4">
          <img src={shadowCone} alt="shadow" />
          <Card className="max-w-sm absolute top-4 right-1/2 mx-auto shadow-none border-[0.5px] border-[#005AE2]">
            <img src={urlPath} alt="shorten url" />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </Card>
        </div>
      </div>
      <div className="mt-24 w-full">
        <img src={base} alt="hero base" />
      </div>
    </Container>
  );
};

export default HeroSection;
