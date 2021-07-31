import ScheduledEvents from "../scheduled-events/scheduled-events";

const TimeBarCenter = (props) => {

    return ( <div className="time-bar-center">
        <ScheduledEvents atTime = {props.atTime - 0.01} />
    </div>);
}

export default TimeBarCenter;
