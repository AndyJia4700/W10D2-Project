import React from 'react';
// const Months = {1:'Jan', 2:'Feb', 3:'Mar', 4:'Apr',5:'May',6:'Jun',7:'Jul',8:'Aug',9:'Sep',10:'Oct',11:'Nov',12:'Dec'}
const Months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug',8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class Clock extends React.Component {

    constructor (props) {
        super(props);
        this.state = { 
            // full_date: new Date(),
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),

            day: weekday[new Date().getDay()],
            // month: Object.values(Months(new Date())),
            month: Months[new Date().getMonth()],
            date: new Date().getDate(),
            year: new Date().getFullYear()
        }; 
        //Date() returns: year, month, date, hours, minutes, seconds, milliseconds
        this.tick = this.tick.bind(this);
        // setInterval(this.tick, 1000);
    }

    render () {
        return (
            <div className="full-date">
                <h1>Our Clock</h1>
                {/* <h3>Time: </h3> */}
                <span>Clock: {this.state.hours} : {this.state.minutes} : {this.state.seconds}</span>
                <br/>
                {/* <h3>Date: </h3> */}
                <span>Date: {this.state.day}  {this.state.month}  {this.state.date}  {this.state.year}</span>

            </div>
        )
    }

    tick () {
        this.setState({
            // full_date: new Date(),
            // hours: full_date.getHours(),
            // minutes: full_date.getMinutes(),
            // seconds: full_date.getSeconds()
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds()
        })
    }

    // render first, then compDidMount
    componentDidMount() {
        setInterval(this.tick, 1000);
        // ajaxRequest().then(dogGif => {
        //     this.setState({
        //         gif: dogGif
        //     });
        // });
    };

    componentWillUnmount(){
        const interval_id = this.componentDidMount();
        clearInterval(interval_id)
    };


}

export default Clock;