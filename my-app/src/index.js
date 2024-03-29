import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import AddCharacter from './components/AddCharacter';

import { BrowserRouter as Router } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
  );
