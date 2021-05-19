import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Skills from "./Components/Skills.js";
import Contact from "./Components/Contact.js";
import Project from "./Components/Projects.js";
import dev from "./Components/dev.js";
//import ReactPageScroller from 'react-page-scroller' ;


const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen leading-normal tracking-normal ">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Project} />
          <Route exact path="/dev" component={dev} />
        </Switch>
        
      </div>
    </Router>
  );
};

export default App;
