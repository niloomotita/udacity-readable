import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import readableApp from './reducers/index'

let store = createStore(
    readableApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState())
ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>   
</BrowserRouter>, 
document.getElementById('root'))

