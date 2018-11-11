import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = {
    count : 40
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case "INCREMENT" :
        return Object.assign({}, state , {
            count : state.count + 1
        });
    case "DECREMENT" :
        return Object.assign({}, state , {
            count : state.count - 1
        });
    default : 
        return state;
  }
}


const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
