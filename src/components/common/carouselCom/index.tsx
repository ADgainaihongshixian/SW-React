import React, { FC, useEffect, useState } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { joinCn } from '@/utils/funcs';
import './index.scss';

type CarouselComType = {
  imgMap: { src: string; alt?: string }[];
  cs?: string;
};

const CarouselCom: FC<CarouselComType> = (props) => {
  const { imgMap, cs } = props;
  const cl = 'common-carousel';
  const [imgIndex, setImgIndex] = useState<number>(0);
  const changeFn = (num: number) => {
    setImgIndex(imgIndex + num);
    if (num > 0 && imgIndex >= imgMap?.length - 1) {
      setImgIndex(0);
    }
    if (num < 0 && imgIndex <= 0) {
      setImgIndex(imgMap?.length - 1);
    }
  };
  const clickFn = (index: number) => {
    imgIndex !== index && setImgIndex(index);
  };
  console.log('##imgIndex', imgIndex);

  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({ ...style, transform: `translateX(-${imgIndex * 100}%)` });
  }, [imgIndex]);

  return (
    <div className={cn(cl, cs)}>
      <CaretLeftOutlined className='carousel-left-icon' onClick={() => changeFn(-1)} />
      <div className={joinCn(cl, 'list')} style={{ ...style }}>
        {imgMap.map((i: { src: string; alt?: string }, idx: number) => (
          <img
            key={`${i.src}-${idx}`}
            className='carousel-item'
            src={i.src}
            alt={i?.alt || `Picture${idx}`}
            referrerPolicy='no-referrer'
          />
        ))}
      </div>
      <CaretRightOutlined className='carousel-right-icon' onClick={() => changeFn(1)} />
      <div className={joinCn(cl, 'dots')}>
        {imgMap.map((i: { src: string; alt?: string }, idx: number) => (
          <div
            key={`${i.src}-${idx}`}
            className={cn('dot', { 'dot-active': idx === imgIndex })}
            onClick={() => clickFn(idx)}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselCom;
