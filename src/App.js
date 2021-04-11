
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Component } from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className ="header-color" title="Menu" scroll>
              <Navigation>
                  <Link to = "/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/schedule">Schedule</Link>
              </Navigation>
          </Header>
          <Drawer title="Menu">
              <Navigation>
              <Link to= "/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/schedule">Schedule</Link>
              </Navigation>
          </Drawer>
          <Content className = "body-color">
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    )
  }
  
}

export default App;
