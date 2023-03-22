import './App.css';
import { useState } from 'react';
import Stopwatch from './components/Stopwatch';
import TimerContext from './context/TimerContext';
function App() {
  const [minutes,setMinutes]=useState(0)
  const [seconds,setSeconds]=useState(0)
  const [flag,setFlag]=useState(false)
  const [lapsList,setLapsList]=useState([])
  let timeOut;
  return (
    <TimerContext.Provider value={{minutes,setMinutes,seconds,setSeconds,flag,setFlag,timeOut,lapsList,setLapsList}}>
    <div className="clock-container">
      <Stopwatch/>      
    </div>
    </TimerContext.Provider>
  );
}

export default App;
