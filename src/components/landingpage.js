import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render(){
        return(
            <div style= {{width:'100%',margin: 'auto'}}>
                <Grid className = "landing-grid">
                 <Cell col={12}>
                     <img
                     src ="/images/mesaSelfie.jpg"
                     alt="avatar"
                     className ="avatar-img"
                     />
                     <div className ="banner-text">
                         <h1>Dylan Taylor </h1>
                         
                         <hr/>
                    <p> C++ | C | JavaScript | SQL </p>
                    <div className = "social-links">
                        {/* target = "_blank" opens in another tab*/}
                        {/*Github*/}
                        <a href="https://github.com/dtaylor6306" target="_blank" rel = "noopener noreferrer"> 
                            <i className ="fa fa-github" rel = "noopener noreferrer" aria-hidden ="true"/>
                        </a>
                    </div>
                     </div>
                 </Cell>

                </Grid>
            </div>
        )
    }
}

export default LandingPage;