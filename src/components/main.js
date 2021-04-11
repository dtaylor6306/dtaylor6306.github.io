import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Resume from './resume';
import LandingPage from './landingpage';
import Schedule from './schedule';


const Main = () => (
    <Switch>
        <Route exact path="/" component ={LandingPage} />
        <Route path="/resume" component ={Resume} />
        <Route path="/aboutme" component ={AboutMe} />
        <Route path="/schedule" component = {Schedule} />
    </Switch>
)

export default Main;