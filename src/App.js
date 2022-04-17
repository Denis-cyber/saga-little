import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const store = useSelector(s => s);

  console.log(store);

  return (
    <div>
      redux-saga
      <button onClick={() => dispatch({type: 'SAGA_START'})}>Click me</button>
    </div>
  );
}

export default App;
