import React from 'react';
import { BrowserRouter, useHistory, useLocation, withRouter, Switch } from 'react-router-dom';
import intl from 'react-intl-universal';
import logo from './logo.svg';
import './App.css';

function App() {
  const locales = {
    'en': require('./locales/en-US.json'),
    'zh': require('./locales/zh-CN.json'),
  };
  intl.init({ currentLocale: 'en-US', locales });
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
