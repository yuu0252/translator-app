import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store.ts';

{
  () => {
    // CSRでscriptを実行するために行う
    if (!window.MediaRecorder) {
      document.write(
        decodeURI('%3Cscript defer src="/polyfill.ts">%3C/script>')
      );
    }
  };
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
