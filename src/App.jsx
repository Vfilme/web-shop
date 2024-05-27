import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import { Provider } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const cash = useSelector(state=>state.cash.cash);
  const dispatch = useDispatch();
  const addCash = cash => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = cash => {
    dispatch({type: "GET_CASH", payload: cash})
  }
    return (
      <>
        <Header />
        {/* <Products /> */}
        <div>
          <h2>{`this is cash ${cash}`}</h2>
          <button onClick={()=>{addCash(Number(prompt()))}}>add cash</button>
          <button onClick={()=>{getCash(Number(prompt()))}}>get cash</button>
        </div>
      </>
    );
}