import React, { FC } from 'react';
import UpDownItem from '@/components/common/upDownItem';
import intl from 'react-intl-universal';
import './index.scss';

type UxListType = {
  aa?: any;
};

const UxList: FC<UxListType> = (props) => {
  const { aa } = props;
  const cs = 'ux-list-container';
  return (
    <div className={cs}>
      <UpDownItem title={'11'} content={'22'} />
    </div>
  );
};
export default UxList;
