import React, { FC, useState } from 'react';
import { Button, Dropdown, Input, Menu } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { SearchProps } from 'antd/es/input';
import AutoRoute from '@/components/autoRoute';
import intl from 'react-intl-universal';
import { cloneDeep } from 'lodash';
import { getLocalStorage, jointCn, setLocalStorage } from '@/utils/funcs';
import { COLLAPSEDKEY } from '@/utils/const';
import { routers } from '@/routes';
import CnEnIcon from '@/assets/svgs/CnEnIcon.svg';
import InstallIcon from '@/assets/svgs/InstallIcon.svg';
import './index.scss';

type SideLayoutType = {
  langFn:any;
}
type MenuItem = Required<MenuProps>['items'][number];
const { Search } = Input;

const SideLayout: FC<SideLayoutType> = (props) => {
  const {langFn} = props;
  const outerLayer = 'app-side-layout';
  const btnBox = 'collapsed-box';
  const collapsedKey = getLocalStorage(COLLAPSEDKEY);

  const [collapsed, setCollapsed] = useState<boolean>(collapsedKey && +collapsedKey ? true : false);
  const toggleCollapsed = () => {
    collapsedKey && +collapsedKey ? setLocalStorage(COLLAPSEDKEY,'0') : setLocalStorage(COLLAPSEDKEY,'1');
    collapsedKey && +collapsedKey ? setCollapsed(false) : setCollapsed(true);
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
        <div onClick={()=>langFn('zh-CN')}>{intl.get('Zh_Language')}</div>
      ),
    },
    {
      key: 'EN',
      label: (
        <div onClick={()=>langFn('en-US')}>{intl.get('En_Language')}</div>
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
          <Search className='global-search' placeholder={intl.get('Global_Search')} allowClear onSearch={onSearch} />
          <Dropdown menu={{ items: langItems }} className='lang-dropdown' overlayClassName='lang-dropdown-menu'>
            <a onClick={(e) => e.preventDefault()}>
              <img src={CnEnIcon} />
              <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown menu={{ items: installItems }} className='install-dropdown' overlayClassName='install-dropdown-menu'>
            <a onClick={(e) => e.preventDefault()}>
              <img src={InstallIcon} />
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <AutoRoute routeMaps={cloneDeep(routers)}/>
      </section>
    </div>
  );
};
export default SideLayout;
