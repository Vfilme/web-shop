import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import { Provider } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIncrementCreater, asyncDecrementCreater } from './store/countReducer.js';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.countReducer.count);
    return (
      <>
        <Header />
        {/* <Products /> */}
        <div>
          <h2>{count}</h2>
          <button onClick={()=>{dispatch(asyncIncrementCreater())}}>increment</button>
          <button onClick={()=>{dispatch(asyncDecrementCreater())}}>decrement</button>
        </div>
      </>
    );
}