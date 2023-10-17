import React, { FC, useState } from 'react';
import { Button, Dropdown, Input, Menu } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { SearchProps } from 'antd/es/input';
import intl from 'react-intl-universal';
import { jointCn } from '../../utils/funcs';
import cnenIcon from '../../assets/svgs/cnenIcon.svg';
import installIcon from '../../assets/svgs/installIcon.svg';
import './index.scss';


type SideLayoutType = {
  aa?:any;
}
type MenuItem = Required<MenuProps>['items'][number];
const { Search } = Input;

const SideLayout: FC<SideLayoutType> = (props) => {
  const outerLayer = 'app-side-layout';
  const btnBox = 'collapsed-box';
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const menuList: MenuItem[] = [
    { key: 1, label: '1', icon: <PieChartOutlined />, title: '' },
    { key: 2, label: '2', icon: <DesktopOutlined />, title: '' },
    { key: 3, label: '3', icon: <ContainerOutlined />, title: '' },
    { key: 4, label: '4', icon: <MailOutlined />, title: '' },
    { key: 5, label: '5', icon: <AppstoreOutlined />, children:[
      {key: 51, label: '5-1'},
      {key: 52, label: '5-2'},
    ] },
  ];
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const langItems: MenuProps['items'] = [
    {
      key: 'CN',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">中文</a>
      ),
    },
    {
      key: 'EN',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">英文</a>
      ),
    },
  ];
  const installItems: MenuProps['items'] = [
    {
      key: 'user',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">用户管理</a>
      ),
    },
    {
      key: 'logout',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">退出登录</a>
      ),
    },
    {
      key: 'help',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">帮助</a>
      ),
    },
  ];

  return (
    <div className={outerLayer}>
      <section className={jointCn(outerLayer,collapsed?'menu-fold':'menu-unfold','menu')}>
        <Menu
          defaultSelectedKeys={[menuList?.[0]?.key?`${menuList[0].key}`:'1']}
          defaultOpenKeys={[menuList?.[0]?.key?`${menuList[0].key}`:'1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={menuList}
          style={{width:collapsed ? 80 : 256}}
        />
        <div className={btnBox} style={{width:collapsed ? 80 : 256}}>
          <Button type="primary" onClick={toggleCollapsed} className={jointCn(btnBox,collapsed ? 'btn-fold' : 'btn-unfold','btn')}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </section>
      <section className={jointCn(outerLayer,'container')}>
        <div className='tools'>
          <Search className='global-search' placeholder="全局搜索" allowClear onSearch={onSearch} />
          <Dropdown menu={{ items: langItems }} className='lang-dropdown' overlayClassName='lang-dropdown-menu'>
            <a onClick={(e) => e.preventDefault()}>
              <img src={cnenIcon} />
              <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown menu={{ items: installItems }} className='install-dropdown' overlayClassName='install-dropdown-menu'>
            <a onClick={(e) => e.preventDefault()}>
              <img src={installIcon} />
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </section>
    </div>
  );
};
export default SideLayout;
