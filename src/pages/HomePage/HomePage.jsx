import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

import { Title } from './HomePage.styled';
import { HourglassLoader } from 'components/Loader/Loader';

const HomePage = () => {
  const name = useSelector(authSelectors.selectUserName);

  return (
    <>
      <Title>Hello {name}</Title>
      <HourglassLoader />
    </>
  );
};

export default HomePage;
