import React, { FC } from 'react';
import { Layout } from 'antd';
import ShowCom from '@/components/common/showCom';
import intl from 'react-intl-universal';
import cn from 'classnames';
import { joinCn } from '@/utils/funcs';
import './index.scss';

type BodyComType = {
  cs?: any;
  headerChildren?: any;
  contentChildren: any;
  footerChildren?: any;
};

const { Header, Content, Footer } = Layout;

const BodyCom: FC<BodyComType> = (props) => {
  const { cs, headerChildren, contentChildren, footerChildren } = props;
  const layOutClass = 'common_bodyCom_layout';

  return (
    <Layout className={cn(layOutClass, cs)}>
      <ShowCom show={!!headerChildren}>
        <Header>
          <div className={joinCn(layOutClass, 'header-container')}>{headerChildren}</div>
        </Header>
      </ShowCom>
      <Content>
        <div className='content-container'>{contentChildren}</div>
      </Content>
      <ShowCom show={!!footerChildren}>
        <Footer>
          <div className={joinCn(layOutClass, 'footer-container')}>{footerChildren}</div>
        </Footer>
      </ShowCom>
    </Layout>
  );
};
export default BodyCom;
