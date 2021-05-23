import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import BlogPageData from "./Components/Blog/BlogPageData";
import FooterMain from "./Components/FooterMain/FooterMain";
function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/blog'>
            <BlogPageData></BlogPageData>
          </Route>
          <Route exact="*">Error!</Route>
        </Switch>
        <FooterMain />
      </Router>
    </div>
  );
}

export default App;
