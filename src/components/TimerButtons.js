import React, { useContext } from "react";
import TimerContext from "../context/TimerContext";

const handlePlay = (timerValues) => {
    timerValues.setFlag(true)
}

const handleStop = (timerValues) => {
    timerValues.setFlag(false)
    clearTimeout(timerValues.timeOut)
}

const handleReset = (timerValues) => {
    timerValues.setFlag(false)
    timerValues.setLapsList([])
    clearTimeout(timerValues.timeOut)
}

const handleLaps = (timerValues) => {
    timerValues.setLapsList((prev)=>[...prev,[timerValues.minutes,timerValues.seconds]])
}
const TimerButtons = () => {
    const timerValues = useContext(TimerContext)
    return <div className="mt-20 mb-40">

        <button data-test-id='play' disabled={!timerValues.flag} className='mr-10 p-10 btn' onClick={() => handlePlay(timerValues)}>Play</button>
        <button disabled={!timerValues.flag} className='mr-10 p-10 btn' onClick={() => handleStop(timerValues)}>Stop</button>
        <button disabled={!(timerValues.minutes)} className='mr-10 p-10 btn' onClick={() => handleReset(timerValues)}>Reset</button>
        <button disabled={timerValues.seconds} className='mr-10 p-10 btn' onClick={() => handleLaps(timerValues)}>Laps</button>

    </div>
}

export default TimerButtons