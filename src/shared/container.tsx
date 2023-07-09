import { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: IProps) => {
  return (
    <section className={`${className!} max-w-7xl mx-auto px-28`}>
      {children}
    </section>
  );
};

export default Container;
