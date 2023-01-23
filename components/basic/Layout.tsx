import router from 'next/router';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { ContentContainer } from '../styledComponents/ContentContainer';
import { Header } from './Header';
import { navIsOpen } from '../../atoms/navIsOpen';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const isOpen = useRecoilValue(navIsOpen);
  const [onIndex, setOnIndex] = useState(false);

  useEffect(() => {
    if (router.pathname === '/' && onIndex === false) {
      setOnIndex(true);
    }
  }, []);
  return (
    <ContentContainer isOnIndex={onIndex} isOpen={isOpen}>
      <Header />
      {children}
    </ContentContainer>
  );
};
