import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [score ,setScore] = useState(0)
  const [wicket,setWicket] = useState(0)

  const runs = (event)=> {
    setScore(score+Number(event.target.value))
  }
  return (
  <div>
    <h1>Cricket Match : {score}/{wicket} </h1>
    <button value={1}
    onClick={runs}>1 run</button><br></br>
     <button value={2}
    onClick={runs}>2 run</button><br></br>
     <button value={3}
    onClick={runs}>3 run</button><br></br>
     <button value={4}
    onClick={runs}>4 run</button><br></br>
    <button onClick={() =>
    setWicket(wicket+1)}>Total Runs</button>
  </div> 
  );
}

export default App;
