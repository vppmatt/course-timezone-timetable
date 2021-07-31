import './../css/time-line.css'
import OtherTimeBar from "../other-time-bar/other-time-bar";
import {timeZone1,timeZone2} from './../../course-data'


const TimeLineBlock = (props) => {

    const firstValue = +props.hoursAdjust + timeZone1.offset
    const secondValue = +props.hoursAdjust + timeZone2.offset

    const timeNow = new Date();
    timeNow.setTime(timeNow.getTime() + (firstValue*60*60*1000));
    const hours =  timeNow.toLocaleTimeString().substr(0,2);
    const mins =   timeNow.toLocaleTimeString().substr(3,2);
    const firstTime = +hours + (+mins / 60)/100;

    return (
        <div className="time-line-outer-wrapper">
            <OtherTimeBar offset1={firstValue} offset2={secondValue} atTime={+firstTime} />
            <OtherTimeBar offset1={firstValue + 0.5} offset2={secondValue + 0.5} atTime={+firstTime + 0.5} />
            <OtherTimeBar offset1={firstValue + 1} offset2={secondValue + 1} atTime={+firstTime + 1} />
            <OtherTimeBar offset1={firstValue + 1.5} offset2={secondValue + 1.5} atTime={+firstTime + 1.5} />
        </div>
    );
}

export default TimeLineBlock;
