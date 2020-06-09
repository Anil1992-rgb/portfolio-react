import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Resume from "./assets/ResumePDF.pdf"


// import Home from './components/Home';
// import About from './components/About';
import Contact from './components/Contact';
// import Error from './components/Error';
// import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Main} exact/>
             <Route path="/projects" component={Projects}/>
             <Route path="/resume" component={Resume}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;