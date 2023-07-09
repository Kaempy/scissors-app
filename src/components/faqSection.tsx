import { Accordion } from 'flowbite-react';
import gradLine from '../assets/grad-line.svg';
import Container from '../shared/container';

const { Panel, Title, Content } = Accordion;
const accordionContent = [
  {
    id: '1',
    title: 'How does URL shortening work?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '2',
    title:
      'Is it necessary to create an account to use the URL shortening service?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '3',
    title: 'Are the shortened links permanent? Will they expire?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '4',
    title: 'Are there any limitations on the number of URLs I can shorten?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '5',
    title: 'Can I customize the shortened URLs to reflect my brand or content?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '6',
    title: 'Can I track the performance of my shortened URLs?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '7',
    title:
      'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '8',
    title: 'What is a QR code and what can it do?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    id: '9',
    title:
      'Is there an API available for integrating the URL shortening service into my own applications or websites?',
    desc: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
];
const FaqSection = () => {
  return (
    <Container className="">
      <div id="faq">
        <h4 className="text-[2.5rem] leading-[2rem]">
          <img src={gradLine} alt="grad line" className="inline" />
          &nbsp;FAQs
        </h4>
        <Accordion className="my-8 max-w-4xl mx-auto border-none text-start">
          {accordionContent.map((item) => (
            <Panel key={item.id}>
              <Title className="bg-white focus:ring-0 text-xl leading-8 font-medium">
                {item.title}
              </Title>
              <Content className="text-base leading-8">{item.desc}</Content>
            </Panel>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FaqSection;
