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
        setTimeout(refreshTimes, 60000);
    }

    useEffect( () => {
        setTimeout(refreshTimes, 1000);
    } , []);

    return <div className={props.className} >{displayTime}</div>;
}

export default TimeDisplay;
