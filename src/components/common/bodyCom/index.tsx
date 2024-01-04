import React, { FC } from 'react';
import { Layout } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ShowCom from '@/components/common/showCom';
import { useHistory } from 'react-router-dom';
import intl from 'react-intl-universal';
import cn from 'classnames';
import { joinCn } from '@/utils/funcs';
import { PATH } from '@/utils/router';
import './index.scss';

type BodyComType = {
  cs?: any;
  headerChildren?: any;
  contentChildren: any;
  footerChildren?: any;
  showBack?: boolean;
  backUrl?: string;
};

const { Header, Content, Footer } = Layout;

const BodyCom: FC<BodyComType> = (props) => {
  const { cs, headerChildren, contentChildren, footerChildren, showBack = true, backUrl = PATH } = props;
  const layOutClass = 'common_bodyCom_layout';
  const history = useHistory();

  return (
    <Layout className={cn(layOutClass, cs)}>
      <ShowCom show={!!headerChildren}>
        <Header>
          <div className={joinCn(layOutClass, 'header-container')}>
            {showBack && <ArrowLeftOutlined onClick={() => history.push(backUrl)} />}
            {headerChildren}
          </div>
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
