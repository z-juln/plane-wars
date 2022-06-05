import React from 'react';
import ReactDOM from 'react-dom';
import './reset.less';
import { RecoilRoot } from 'recoil';

const App = () => {
  return <>App</>;
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('app'),
);
