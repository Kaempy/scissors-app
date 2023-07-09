import { Card } from 'flowbite-react';
import analytics from '../assets/analytics.svg';
import edit from '../assets/edit.svg';
import gradLine from '../assets/grad-line.svg';
import link from '../assets/link.svg';
import qrCode from '../assets/qr-code.svg';
import Container from '../shared/container';

const gridCard = [
  {
    id: '1',
    icon: link,
    title: 'URL Shortening',
    desc: 'Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.',
  },
  {
    id: '2',
    icon: edit,
    title: 'Custom URLs',
    desc: 'With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.',
  },
  {
    id: '3',
    icon: qrCode,
    title: 'QR Codes',
    desc: 'Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.',
  },
  {
    id: '4',
    icon: analytics,
    title: 'Data Analytics',
    desc: 'Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.',
  },
];

const FeaturesSection = () => {
  return (
    <Container className="flex items-start text-start justify-between">
      <div id="features" className="text-start">
        <Card className="max-w-lg border-none shadow-none">
          <h4 className="text-[2.5rem] leading-8">
            <img src={gradLine} alt="grad line" className="inline" />
            &nbsp; Why choose <span className="text-primary">Scissors</span>
          </h4>
          <p className="text-base leading-7">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </Card>
      </div>
      <div className="grid items-center justify-between grid-cols-2">
        {gridCard.map((item) => (
          <Card key={item.id} className="max-w-lg border-none shadow-none">
            <img src={item.icon} alt="grad line" className="inline w-14 h-14" />
            <h5 className="text-[2rem] leading-[1.75rem]">{item.title}</h5>
            <p className="text-base">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default FeaturesSection;
