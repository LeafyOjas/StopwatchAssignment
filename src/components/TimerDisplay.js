import React, { useContext, useEffect } from "react";
import TimerContext from "../context/TimerContext";
export const TimerDisplay = () => {
    const timerValues = useContext(TimerContext)

    useEffect(() => {
        if (!timerValues.flag) {
            timerValues.timeOut = setTimeout(() => {
                timerValues.setSeconds((prev) => prev + 1)
            }, 1000);
            if (timerValues.seconds === 10) {
                timerValues.setMinutes((prev) => prev + 1)
                timerValues.setSeconds(0)
            }

        }
    })

    return <div className="container">
        <h1 className="f-40 letter-spacing">Timer</h1>
        <div>
            <span className="p-l-10 f-30">{timerValues.minutes} : </span>
            <span className="f-30">{timerValues.seconds}</span>
        </div>
    </div>
}
