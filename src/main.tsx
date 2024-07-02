import { ConfigProvider } from 'antd';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { store } from './modules/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff725e',
            fontFamily: 'Montserrat',
          },
        }}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
