import './App.css';
import TimeLineBlock from "./components/time-line-block/time-line-block";
import CurrentTimeBar from "./components/current-time-bar/current-time-bar";
import Header from "./components/header/header";

function App() {

    //Note that the course-data.js file contains the timezone and event info

  return (
      <div>
        <Header />
        <TimeLineBlock hoursAdjust="-2"  />
        <CurrentTimeBar />
        <TimeLineBlock hoursAdjust="1" />
      </div>
  );
}

export default App;
