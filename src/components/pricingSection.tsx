import { Button, Card } from 'flowbite-react';
import gradLine from '../assets/grad-line.svg';
import Container from '../shared/container';
import '../styles/index.css';

// const pricingData = [
//   {
//     id: '1',
//     plan: 'Basic',
//     type: 'Free',
//     heading: 'Free plan for all users',
//     ul: 'icon-list',
//     bg: 'transparent',
//     text: 'secondary',
//     list: [
//       'Unlimited URL Shortening',
//       'Basic Link Analytics',
//       'Customizable Short Links',
//       'Standard Support',
//       'Ad-supported',
//     ],
//   },
//   {
//     id: '2',
//     plan: 'Professional',
//     type: '$15/month',
//     heading: 'Ideal for business creators',
//     ul: 'icon-list-2',
//     bg: 'slate-300',
//     text: 'white',
//     list: [
//       'Enhanced Link Analytics',
//       'Custom Branded Domains',
//       'Advanced Link Customization',
//       'Priority Support',
//       'Ad-free Experience',
//     ],
//   },
//   {
//     id: '3',
//     plan: 'Teams',
//     type: '$25/month',
//     heading: 'Share with up to 10 users',
//     ul: 'icon-list',
//     text: 'secondary',
//     bg: 'transparent',
//     list: [
//       'Team Collaboration',
//       'User Roles and Permissions',
//       'Enhanced Security',
//       'API Access',
//       'Dedicated Account Manager',
//     ],
//   },
// ];

const PricingSection = () => {
  return (
    <Container>
      <div id="pricing" className="mb-8 mx-auto">
        <h3 className="text-[2.5rem] leading-[3rem]">
          <img src={gradLine} alt="grad line" className="inline" />
          &nbsp;A &nbsp;
          <span className="text-primary">price perfect</span>&nbsp; for your
          needs.
        </h3>
        <p className="text-base leading-6">
          From catering for your personal, business, event, socials needs, you
          can be <br /> rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className="grid grid-cols-3 my-16 items-center justify-center">
        <Card className="max-w-[350px] shadow-none border-[0.5px] text-secondary bg-white border-primary text-left px-6">
          <p className="text-2xl">Basic</p>
          <h3 className="text-[2.5rem] leading-[3rem]">Free</h3>
          <p className="text-xl leading-8">Free plan for all users</p>
          <ul className="icon-list">
            <li className="text-[0.875rem] leading-6 mb-3">
              Unlimited URL Shortening
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Basic Link Analytics
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Customizable Short Links
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">Standard Support</li>
            <li className="text-[0.875rem] leading-6 mb-3">Ad-supported</li>
          </ul>
        </Card>
        <Card className="max-w-[350px] shadow-none border-[0.5px] scale-110 text-white bg-[#1e3448] border-[#1e3448] text-left px-6">
          <p className="text-2xl">Professional</p>
          <h3 className="text-[2.5rem] leading-[3rem]">$15/month</h3>
          <p className="text-xl leading-8">Ideal for business creators</p>
          <ul className="icon-list-2">
            <li className="text-[0.875rem] leading-6 mb-3">
              Enhanced Link Analytics
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Custom Branded Domains
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Advanced Link Customization
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">Priority Support</li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Ad-free Experience
            </li>
          </ul>
        </Card>
        <Card className="max-w-[350px] shadow-none border-[0.5px] text-secondary bg-white border-primary text-left px-6">
          <p className="text-2xl">Teams</p>
          <h3 className="text-[2.5rem] leading-[3rem]">$25/month</h3>
          <p className="text-xl leading-8">Share with up to 10 users</p>
          <ul className="icon-list">
            <li className="text-[0.875rem] leading-6 mb-3">
              Team Collaboration
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">
              User Roles and Permissions
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Enhanced Security
            </li>
            <li className="text-[0.875rem] leading-6 mb-3">API Access</li>
            <li className="text-[0.875rem] leading-6 mb-3">
              Dedicated Account Manager
            </li>
          </ul>
        </Card>
      </div>
      <div className="flex items-center justify-center mt-6 gap-4">
        <Button color="default" className="border-[0.5px] border-primary" pill>
          Get Custom Pricing
        </Button>
        <Button color="primary" pill>
          Select Pricing
        </Button>
      </div>

      {/* {pricingData.map((item) => (
        <Card
          key={item.id}
          className={`max-w-sm shadow-none border-[0.5px] :nth-of-type(2):bg-teal-900 text-${item.text} bg-${item.bg} border-primary text-left px-12`}
        >
          <p className="text-2xl">{item.plan}</p>
          <h3 className="text-[2.5rem] leading-[3rem]">{item.type}</h3>
          <p className="text-xl leading-8">{item.heading}</p>
          <ul className={`${item.ul}`}>
            {item.list.map((data, index) => (
              <li key={index} className="text-[0.875rem] leading-6 mb-3">
                {data}
              </li>
            ))}
          </ul>
        </Card>
      ))} */}
    </Container>
  );
};

export default PricingSection;
