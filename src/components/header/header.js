import {timeZone1,timeZone2} from './../../course-data'

const Header = () => {

    return (<div className="time-line-outer-wrapper">
            <h2>{timeZone1.location}</h2>
            <div className="header-spacer">&nbsp;</div>
            <h2 className="h2-right">{timeZone2.location}</h2>
            <div className="clearBoth" />
            </div>);
}

export default Header;
