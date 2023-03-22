import React, { useContext } from "react";
import TimerContext from "../context/TimerContext";

const LapsList =()=>{
    const {lapsList}=useContext(TimerContext)
    return <div className="laps">
        <h3>Laps Record</h3>
        {lapsList.map((lap,id)=>{
            return <div className='lap bg-color-smoke' key={id}>
                <span className="bg-color-smoke">{lap[0] } :</span>
                <span className="bg-color-smoke">{lap[1]}</span>
            </div>
        })}
    </div>
}

export default LapsList