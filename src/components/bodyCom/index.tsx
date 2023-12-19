import React, { FC } from 'react';
import intl from 'react-intl-universal';

type BodyComType = {
  aa?: any;
};

const BodyCom: FC<BodyComType> = (props) => {
  const { aa } = props;
  return <div />;
};
export default BodyCom;
