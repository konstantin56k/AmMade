import React from 'react';
import ReactDOM from'react-dom/client';
import App from '../client/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { createStore } from 'redux';

const globalStore = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={globalStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>   
    </Provider>
);