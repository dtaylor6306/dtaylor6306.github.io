import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class AboutMeText extends Component {
    render(){
        return(
            <div>
                <div className = "aboutme-grid">
                <Grid>
                    <Cell col ={12}>
                    <p>&nbsp; &nbsp; &nbsp;My name is Dylan Taylor, I am currently a student at Colorado Mesa University, aswell as a Tutor for the school. 
                        I started my academic journey in 2017 and will graduate with a B.S. in Computer Science spring 2021. When I started my academic 
                        journey I wanted to persue a degree in electrical engineering, but after my firstcoding class I quickly found a love for coding. 
                        I switched majors and never looked back.&nbsp;</p>
                    <p>&nbsp; &nbsp; Along with a love for coding, I also love being out doors, soaking up the sun and hiking is
                         my preferred weekend activity. </p>
                    </Cell>
                </Grid>
                </div>
                
            </div>
        
        )
    }
}

export default AboutMeText;