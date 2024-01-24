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
  const [imgIndex, setImgIndex] = useState<number>(1);
  const list = [imgMap[imgMap.length - 1], ...imgMap, imgMap[0]];
  const changeFn = (num: number) => {
    setImgIndex(imgIndex + num);
    if (num > 0 && imgIndex >= list?.length - 2) {
      setImgIndex(0);
    }
    if (num < 0 && imgIndex <= 1) {
      setImgIndex(list?.length - 1);
    }
  };
  const clickFn = (index: number) => {
    imgIndex !== index && setImgIndex(index);
  };
  const [style, setStyle] = useState<any>({ transform: 'translateX(-100%)' });

  useEffect(() => {
    if (imgIndex === 0 || imgIndex === list?.length - 1) {
      setStyle({ ...style, transform: `translateX(-${imgIndex * 100}%)`, transition: 'none' });
      // 先强制浏览器渲染transition: 'none'
      setTimeout(() => {
        setImgIndex(imgIndex === 0 ? imgIndex + 1 : imgIndex - 1);
        setStyle({
          ...style,
          transform: `translateX(-${(imgIndex === 0 ? imgIndex + 1 : imgIndex - 1) * 100}%)`,
          transition: '.5s',
        });
      }, 100);
    } else {
      setStyle({ ...style, transform: `translateX(-${imgIndex * 100}%)`, transition: '.5s' });
    }
  }, [imgIndex]);

  return (
    <div className={cn(cl, cs)}>
      <CaretLeftOutlined className='carousel-left-icon' onClick={() => changeFn(-1)} />
      <div className={joinCn(cl, 'list')} style={{ ...style }}>
        {list.map((i: { src: string; alt?: string }, idx: number) => (
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
            className={cn('dot', { 'dot-active': idx + 1 === imgIndex })}
            onClick={() => clickFn(idx + 1)}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselCom;
