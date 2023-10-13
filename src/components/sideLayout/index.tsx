import React, { FC, useState } from 'react';
import { Button, Menu, MenuProps } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { jointCn } from '../../utils/funcs';
import './index.scss';

type SideLayoutType = {
  aa?:any;
}
type MenuItem = Required<MenuProps>['items'][number];

const SideLayout: FC<SideLayoutType> = (props) => {
  const outerLayer = 'side-lay-out';
  const btnBox = 'collapsed-box';
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items:MenuItem[] = [
    { key: 1, label: '1', icon: <PieChartOutlined />, title: '' },
    { key: 2, label: '2', icon: <DesktopOutlined />, title: '' },
    { key: 3, label: '3', icon: <ContainerOutlined />, title: '' },
    { key: 4, label: '4', icon: <MailOutlined />, title: '' },
    { key: 5, label: '5', icon: <AppstoreOutlined />, children:[
      {key: 51, label: '5-1'},
      {key: 52, label: '5-2'},
    ] },
  ];
  return (
    <div className={outerLayer}>
      <section className={jointCn(outerLayer,collapsed?'menu-fold':'menu-unfold','menu')}>
        <Menu
          defaultSelectedKeys={[items?.[0]?.key?`${items[0].key}`:'1']}
          defaultOpenKeys={[items?.[0]?.key?`${items[0].key}`:'1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{width:collapsed ? 80 : 256}}
        />
        <div className={btnBox} style={{width:collapsed ? 80 : 256}}>
          <Button type="primary" onClick={toggleCollapsed} className={jointCn(btnBox,collapsed ? 'btn-fold' : 'btn-unfold','btn')}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </section>
      <section className={jointCn(outerLayer,'container')}>
        <div className='nav'>11</div>
        <div className='content'>22</div>
      </section>
    </div>
  );
};
export default SideLayout;
