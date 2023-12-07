import React, { FC } from 'react';
import intl from 'react-intl-universal';

type HomeType = {
  aa?: any;
}

const Home: FC<HomeType> = (props) => {
  const { aa } = props;
  return (
    <div>11</div>
  );
};
export default Home;
