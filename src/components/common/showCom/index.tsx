import React, { FC } from 'react';

type ShowComType = {
  show: boolean;
  children: any;
};

const ShowCom: FC<ShowComType> = (props) => {
  const { show = true, children } = props;
  return show ? children : null;
};
export default ShowCom;
