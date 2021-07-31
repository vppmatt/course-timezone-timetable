import {events} from './../../course-data'

const ScheduledEvents = (props) => {

    //adjusting by 0.01 to overcome double precision issue
    const remainingEvents = events.filter( it => it.time >= props.atTime - 0.01 && it.time <= props.atTime + 0.49);

    const nextEvent = remainingEvents.length > 0 ? remainingEvents[0] : {time: -1, description : ""};
    const display =  remainingEvents.length > 0;

    const showTime = (time) => {

        const hh = Math.trunc(time);
        const mins = (time - hh) * 60;
        let mm = mins;
        if (mins < 10) mm = "0" + mins;

        return (
            <div>{hh}:{mm}</div>
        );
    }

    return <div>
        {display && <div className="next-event-description">{nextEvent.description}</div>}
        {display && <div className="next-event-time">{showTime(nextEvent.time)}</div>}
    </div>;
}
export default ScheduledEvents;
