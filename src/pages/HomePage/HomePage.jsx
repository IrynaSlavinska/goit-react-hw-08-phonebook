import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/authSelectors';

import { Title } from './HomePage.styled';

const HomePage = () => {
  const name = useSelector(authSelectors.selectUserName);

  return <Title>Wellcome to Phonebook, {name ? name : 'My Friend'}</Title>;
};

export default HomePage;
