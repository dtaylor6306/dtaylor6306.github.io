import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class AboutMe extends Component {
    render(){
        return(
            <div>
                <h1 className = "aboutme-header"> About Me</h1>
                <Grid className = "aboutme-grid">
                    <Cell col ={12}>
                    <p>
                        My name is Dylan Taylor, I am currently a student at Colorado Mesa University, aswell as a Tutor for the school.
                        <br></br>
                        I started my academic journey in 2017 and will graduate with a B.S. in Computer Science spring 2021.
                    </p>

                    </Cell>
                </Grid>
                
                
            </div>
        
        )
    }
}

export default AboutMe;