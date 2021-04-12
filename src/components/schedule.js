import { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import schedule from "../data/schedule.json";


  
  
class Schedule extends Component {
    constructor() {
        super()
        var today = new Date(),
        date =  (today.getMonth() + 1) + '-' +  today.getDate() + '-' + today.getFullYear();
        this.state = {
        currentDate: date
        }
      }
    render(){
        return(
            <div className = "schedule-page">
                <h1 className = "date-time"> Today's Date: { this.state.currentDate }</h1>
                <Grid>
        {
          schedule.map( (course) => (
            <div className = "schedule-grid">
                    <Cell col = {12} >
                    <div className = "schedule-cell">
                    
                    {"Course: " + course.name} <br></br> {"Time: " + course.time}  <br></br> {"Days: " + course.days} 
                    <br></br> {"Credit Hours:" + course.credithour}
                    
                    </div>
                    </Cell>
            </div>
          ))
        }
        </Grid>
            </div>
        );

    }
}


export default Schedule;