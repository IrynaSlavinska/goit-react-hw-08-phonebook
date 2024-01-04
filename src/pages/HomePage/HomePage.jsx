import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

import { Title } from './HomePage.styled';

const HomePage = () => {
  const name = useSelector(authSelectors.selectUserName);

  return <Title>Hello {name}</Title>;
};

export default HomePage;
