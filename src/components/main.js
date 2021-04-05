import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import LandingPage from './landingpage';
import Schedule from './schedule';

const Main = () => (
    <Switch>
        <Route exact path="/" component ={LandingPage} />
        <Route path="/resume" component ={Resume} />
        <Route path="/contact" component ={Contact} />
        <Route path="/aboutme" component ={AboutMe} />
        <Route path="/schedule" component = {Schedule} />
    </Switch>
)

export default Main;