import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const [count ,setCount] = useState(100);
  function increase(){
    setCount(count+100)
  }

  function decrease(){
    setCount(count-100)
  }
  function reset(){
    setCount(0)
  }
  function thousand(){
    setCount(1000)
  }
  function twothousand(){
    setCount(2000)
  }
  function threethousand(){
    setCount(3000)
  }
  function fourthousand(){
    setCount(4000)
  }
  function fivethousand(){
    setCount(5000)
  }
  function withdraw(){
document.getElementById("demo").innerHTML='Your Money Is processed....., Please Wait';
  }
  return (
    <div className='container'>
      <h1 className='heading'>ATM : {count} </h1>
      <button className='btn'onClick={increase}>+</button>  &nbsp; {count} &nbsp;
      <button  className='btn' onClick={decrease}>-</button> &nbsp;
      <button className='btn' onClick={reset}>Reset</button><br></br>
      <button  className='btn' onClick={thousand}>1000</button><br></br>
      <button className='btn' onClick={twothousand}>2000</button><br></br>
      <button className='btn' onClick={threethousand}>3000</button><br></br>
      <button className='btn' onClick={fourthousand}>4000</button><br></br>
      <button className='btn' onClick={fivethousand}>5000</button><br></br>
      <button className='btn' onClick={withdraw}>Withdraw</button>
      <h1 id="demo"></h1>
    </div>
  );
}

export default App;
