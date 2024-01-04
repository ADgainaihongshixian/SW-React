import React, { FC } from 'react';
import BodyCom from '@/components/common/bodyCom';
import intl from 'react-intl-universal';

type HomeType = {
  aa?: any;
};

const Home: FC<HomeType> = (props) => {
  const { aa } = props;

  return <BodyCom headerChildren={11} contentChildren={<div>home.welcome</div>} footerChildren={22} showBack={false} />;
};
export default Home;
