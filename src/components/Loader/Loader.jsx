import { Hourglass } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const HourglassLoader = () => {
  return (
    <LoaderContainer>
      <Hourglass
        visible={true}
        height="200"
        width="200"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#1dacd6', '#e9af3d']}
      />
    </LoaderContainer>
  );
};
