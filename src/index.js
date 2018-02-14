import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageComponent from "./PageComponents/PageComponent";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageComponent />, document.getElementById('root'));
registerServiceWorker();
