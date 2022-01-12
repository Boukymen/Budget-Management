import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './contexts/BudgetsContext';

ReactDOM.render(  
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
    ,

 document.getElementById('root'));
