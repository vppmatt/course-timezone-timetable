import {Fragment} from 'react';
import TimeDisplay from "../time-display/time-display";
import ScheduledEvents from "../scheduled-events/scheduled-events";

const OtherTimeBar = (props) => {
    return (<Fragment>
        <TimeDisplay  offset={props.offset1} className="time-line-left-time"/>
        <div className="time-line-wrapper">
            <ScheduledEvents atTime={props.atTime}/>
        </div>
        <TimeDisplay  offset={props.offset2} className="time-line-right-time"/>
        <div className="clearBoth"/>
    </Fragment>);
}

export default OtherTimeBar;
