import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Mains from './components/Menucomponents/Mains';
import Salads from './components/Menucomponents/Salads';




function App() {
  return (
    <Router>
      
      <div>
      <Navbar />
        
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/mains" component={Mains} />
          <Route path="/salads" component={Salads} />
          <Route path="/contact" component={Contact} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
