import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchUserData from './redux/FetchUserData';


function App() {
  const dispatch=useDispatch()
const loading = useSelector((state) => state.loading);
const data = useSelector((state) => state.data);
const error = useSelector((state) => state.error);
  useEffect(()=>{
    dispatch(FetchUserData(5))
  },[dispatch])
  return (
    <div>
      {loading &&<p>Loading</p>}
{data && (
  <ul>
    <li>Name: {data.firstName}</li>
    <li>Age: {data.age}</li>
    <li>Gender: {data.gender}</li>
  </ul>
)}
      {error&& <p>{error}</p>}
    </div>
  )
}

export default App