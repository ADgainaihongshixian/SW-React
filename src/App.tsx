import React from 'react';
import { BrowserRouter, useHistory, useLocation, withRouter, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import SideLayout from '@/components/sideLayout';
import intl from 'react-intl-universal';
import isEmpty from 'lodash/isEmpty';
import { getLocalLang, setLocalLang } from '@/utils/funcs';

import logo from './logo.svg';
import './App.css';

function App() {
  const lang = getLocalLang();
  let currentLocale = intl.determineLocale({
    localStorageLocaleKey: 'LANGUAGE_KEY',
    // cookieLocaleKey: 'lang',
    // urlLocaleKey:'lang',
  });

  const locales = {
    en: require('./locales/en-US.json'),
    zh: require('./locales/zh-CN.json'),
  };
  if (isEmpty(lang)) {
    setLocalLang('zh-CN');
    currentLocale = 'zh-CN';
  }
  intl.init({
    currentLocale,
    locales: { [currentLocale]: currentLocale === 'en-US' ? locales.en : locales.zh },
  });
  const langFn = (language: string) => {
    if (getLocalLang() !== language) {
      setLocalLang(language);
      currentLocale = language;
    }
    const search = window.location.search.replace(/[?|&]lang=[^&]+/, '');
    window.location.search = window.location.search ? `${search}&lang=${currentLocale}` : `?lang=${currentLocale}`;
  };

  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <ConfigProvider locale={currentLocale === 'en-US' ? locales.en : locales.zh}>
        <SideLayout langFn={langFn} />
      </ConfigProvider>
    </div>
  );
}

const AppWithRouter = withRouter(App);

function AppWraper() {
  return (
    <BrowserRouter>
      <Switch>
        <AppWithRouter />
      </Switch>
    </BrowserRouter>
  );
}

export default AppWraper;
