import './../css/time-line.css';
import TimeDisplay from "./../time-display/time-display";
import TimeBarCenter from "./time-bar-center";
import OtherTimeBar from "../other-time-bar/other-time-bar";
import {timeZone1,timeZone2} from "../../course-data";

const CurrentTimeBar = () => {

    const timeNow = new Date();
    timeNow.setTime(timeNow.getTime() + (timeZone1.offset * 60 * 60 * 1000));
    const hours = timeNow.getHours();
    const mins = timeNow.getMinutes();
    const firstTime = +hours + (+mins / 60);

    //do we display otherTimeBar before or after?
    const exactTimeBefore = mins === 0;
    const exactTimeAfter = mins === 30;
    const timeBefore = timeNow.getMinutes() > 30 ? timeNow.getHours() + 0.5 : timeNow.getHours();
    const timeAfter = timeBefore + 0.5;

    return (<div className="time-line-outer-wrapper">
        {!exactTimeBefore && <OtherTimeBar offset1={timeZone1.offset} offset2={timeZone2.offset} atTime={timeBefore} />}
        <div className="timeBar">
            <TimeDisplay offset={timeZone1.offset} className="left-time" mode="exact"/>
            <div className="arrow-right"/>
            <TimeBarCenter atTime={firstTime}/>
            <div className="arrow-left"/>
            <TimeDisplay offset={timeZone2.offset} className="right-time" mode="exact"/>
            <div className="clearBoth"/>
        </div>
        {!exactTimeAfter && <OtherTimeBar offset1={timeZone1.offset + 0.5} offset2={timeZone2.offset + 0.5} atTime={timeAfter} />}
    </div>);
}

export default CurrentTimeBar;
