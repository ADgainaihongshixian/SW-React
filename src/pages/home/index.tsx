import React, { FC } from 'react';
import BodyCom from '@/components/common/bodyCom';
import UxList from '@/components/home';
import intl from 'react-intl-universal';

type HomeType = Record<string, unknown>;

const Home: FC<HomeType> = (props) => {
  const { aa } = props;

  return (
    <BodyCom headerChildren={intl.get('UxList')} contentChildren={<UxList />} footerChildren={22} showBack={false} />
  );
};
export default Home;
