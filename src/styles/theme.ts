import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-primary text-white font-medium hover:bg-blue-600',
      default:
        'text-primary bg-transparent hover:bg-gray-100 font-medium border-transparent',
    },
  },
  navbar: {
    link: {
      active: {
        on: 'bg-primary text-white dark:text-white md:bg-transparent md:text-primary',
      },
    },
  },
};
export default customTheme;
