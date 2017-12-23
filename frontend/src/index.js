import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import readableApp from './reducers/index'

ReactDOM.render(
<BrowserRouter>
    <Provider>
        <App/>
    </Provider>   
</BrowserRouter>, 
document.getElementById('root'))

