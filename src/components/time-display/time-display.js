import {useEffect, useState} from "react";

const TimeDisplay = (props) => {

    let [displayTime, setDisplayTime] = useState(null);

    const refreshTimes = () => {
        const offset = props.offset;
        let timeNow = new Date();
        timeNow.setTime(timeNow.getTime() + (offset*60*60*1000));

        if(props.mode !== "exact") {
            if (timeNow.getMinutes() > 30) {
                timeNow.setMinutes(30)
            } else {
                timeNow.setMinutes(0)
            }
        }


        setDisplayTime(timeNow.toLocaleTimeString().substr(0,5));
        const currentSeconds = new Date().getSeconds();
        const refreshIn = (60 - currentSeconds) * 1000;
        setTimeout(refreshTimes, refreshIn);
    }

    useEffect( () => refreshTimes() );

    return <div className={props.className} >{displayTime}</div>;
}

export default TimeDisplay;
