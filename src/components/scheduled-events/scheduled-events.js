import {events} from '../../course-data';
import {useEffect, useState} from "react";

const ScheduledEvents = (props) => {

    let [nextEvent, setNextEvent] = useState(null);
    let [display, setDisplay] = useState(null);

    let targetTime = +props.atTime;

    const refreshEvents = () => {

        if (props.isCurrentTime == null || props.isCurrentTime === false) {
            const hours = Math.floor(+props.atTime);
            let mins = +props.atTime - hours;
            if(mins >= 0.5) {
                mins = 0.5;
            }else {
                mins = 0;
            }
            targetTime = hours + mins;
        }


        const remainingEvents = events.filter( it => it.time >= targetTime - 0.05 && it.time <= targetTime + 0.05);
        setNextEvent(remainingEvents.length > 0 ? remainingEvents[0] : {time: -1, description : ""});
        setDisplay(remainingEvents.length > 0);

        console.log('looking for events between ',targetTime - 0.05,targetTime + 0.05)

        setTimeout(refreshEvents, 60000);
    }

    useEffect( () => {
        setTimeout(refreshEvents, 1000);
    }, [] );

    const showTime = (time) => {

        const hh = Math.trunc(time);
        const mins = (time - hh) * 60;
        let mm = mins;
        if (mins < 10) mm = "0" + mins;

        return (
            <div>{hh}:{mm}</div>
        );
    }

    return (<div>
        {props.isCurrentTime && display && <div className="next-event">coming next...</div>}
        {display && <div className="next-event-description">{nextEvent.description}</div>}
        {display && <div className="next-event-time">{showTime(nextEvent.time)}</div>}
    </div>);
}

export default ScheduledEvents;
