import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>You have gone to a non existing page</p>
      <p>Return to the</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFound;
