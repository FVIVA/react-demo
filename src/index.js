import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let data = [
  {id: 0, text: '天气下雨了', complete: false},
  {id: 1, text: '天气下雨了!!', complete: false},
  {id: 2, text: '不要出去玩', complete: true}
]


ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
