import { createStore, applyMiddleware } from "redux";
import orders from '../reducers/orderreducer';
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    return createStore(orders, applyMiddleware(thunk));
};