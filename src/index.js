import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataProvider } from './context/DataContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'
ReactDOM.render(
    <DataProvider>
      <App />
    </DataProvider>,
  document.getElementById('root')
);

