import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Container, Main } from './Layout.styled';
import { HourglassLoader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Main>
        <Suspense fallback={<HourglassLoader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
