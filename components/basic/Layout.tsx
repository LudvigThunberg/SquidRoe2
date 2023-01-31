import router from 'next/router';
import { useRecoilValue } from 'recoil';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </ContentContainer>
  );
};
