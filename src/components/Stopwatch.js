import React, { useContext } from "react";
import TimerContext from "../context/TimerContext";
import LapsList from "./LapsList";
import TimerButtons from "./TimerButtons";
import { TimerDisplay } from "./TimerDisplay";

const Stopwatch=()=>{
    const {lapsList}=useContext(TimerContext)
    return <div className="mb-40">
        <div >
        <TimerDisplay/>
        <TimerButtons/>
        </div>
        {lapsList.length?<LapsList/>:null}
    </div>
}

export default Stopwatch