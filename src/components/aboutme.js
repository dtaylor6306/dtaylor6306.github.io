import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AboutMeText from '../data/aboutmetext';


class AboutMe extends Component {
    render(){
        return(
            <div>
                <h1 className = "aboutme-header"> About Me</h1>
                <AboutMeText/>
               
            </div>
        
        )
    }
}

export default AboutMe;