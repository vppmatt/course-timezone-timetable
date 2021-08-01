import ScheduledEvents from "../scheduled-events/scheduled-events";

const TimeBarCenter = (props) => {

    return ( <div className="time-bar-center" id="next-event">
        <ScheduledEvents atTime = {props.atTime - 0.01} isCurrentTime="true"/>
    </div>);
}

export default TimeBarCenter;
