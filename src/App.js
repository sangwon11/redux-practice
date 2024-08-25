import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: 'increment', payload: { num: 5 } })
  }
  const decrease = () => {
    dispatch({ type: 'decrement', password: { num: 5 } })
  }
  const login = () => {
    dispatch({type: 'LOGIN', payload: {id:'sangwon',password:1234}})
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={login}>Log In</button>
      <Box/>
    </div>
  );
}

export default App;
