import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NavbarLayout = () => {
  const navLinks = [
    { id: '1', link: '/', text: 'My URLs' },
    { id: '2', link: '/#features', text: 'Features' },
    { id: '3', link: '/#pricing', text: 'Pricing' },
    { id: '4', link: '/#analytics', text: 'Analytics' },
    { id: '5', link: '/#faq', text: 'FAQs' },
  ];
  const location = useLocation();
  const path = location.pathname + location.hash;
  return (
    <Navbar fluid className="bg-hero-grad">
      <Navbar.Brand href="/">
        <img alt="Scissor Logo" className="mr-3 h-6 sm:h-9" src={logo} />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex gap-4">
          <Button color="default" pill>
            <Link to="/auth">Log in</Link>
          </Button>
          <Button color="primary" pill>
            <Link to="/auth/signup">Try for free</Link>
          </Button>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navLinks.map((anchor) => (
          <Navbar.Link
            key={anchor.id}
            active={path === anchor.link}
            href={`${anchor.link}`}
          >
            {anchor.text}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLayout;
