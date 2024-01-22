import React, { FC } from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import UpDownItem from '@/components/common/upDownItem';
import ShowCom from '@/components/common/showCom';
import CarouselCom from '@/components/common/carouselCom';
import intl from 'react-intl-universal';
import './index.scss';

type UxListType = {
  aa?: any;
};

const UxList: FC<UxListType> = (props) => {
  const cs = 'ux-list-container';
  const imgMap: { src: string; alt?: string }[] = [
    { src: 'https://s2.loli.net/2024/01/17/scMPa2jnOJQp7lm.jpg' },
    { src: 'https://s2.loli.net/2024/01/17/HfrEB2a4KbpjCoi.jpg' },
    { src: 'https://s2.loli.net/2024/01/17/8F3epoUj14GvwxL.jpg' },
  ];

  const renderMap = [
    {
      title: intl.get('Fault_Style_Picture'),
      tipTitle: intl.get('Mixed_Mode'),
      content: <div className='fault-picture'></div>,
    },
    {
      title: intl.get('Fusion_Style_Picture'),
      tipTitle: `${intl.get('Mixed_Mode')} + ${intl.get('Contrast')}`,
      content: (
        <div className='fusion-picture'>
          <div className='main-picture'></div>
        </div>
      ),
    },
    {
      title: intl.get('Carousel'),
      content: <CarouselCom imgMap={imgMap} />,
    },
    { title: intl.get('Fault_Ripple'), tipTitle: intl.get('Filter', { p: 'SVG' }), content: '22' },
  ];

  return (
    <div className={cs}>
      {renderMap?.map((render: any, index: number) => {
        const { title, tipTitle = '', content } = render;
        return (
          <UpDownItem
            key={`${title}-${index}`}
            title={
              <>
                <span>{title} </span>
                <ShowCom show={!!tipTitle}>
                  <Tooltip title={tipTitle}>
                    <InfoCircleOutlined />
                  </Tooltip>
                </ShowCom>
              </>
            }
            content={content}
          />
        );
      })}
    </div>
  );
};
export default UxList;
