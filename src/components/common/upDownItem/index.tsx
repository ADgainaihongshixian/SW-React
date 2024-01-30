import { joinCn } from '@/utils/funcs';
import React, { FC } from 'react';
import intl from 'react-intl-universal';
import './index.scss';

type UpDownItemType = {
  title: any;
  content: any;
};

const UpDownItem: FC<UpDownItemType> = (props) => {
  const { title, content } = props;
  const cs = 'common-updown-item';
  return (
    <div className='common-updown-item'>
      <div className={joinCn(cs, 'title')}>{title}</div>
      <div className={joinCn(cs, 'content')}>{content}</div>
    </div>
  );
};
export default UpDownItem;
