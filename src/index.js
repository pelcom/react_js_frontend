import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.scss';

import Root from './App';
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();