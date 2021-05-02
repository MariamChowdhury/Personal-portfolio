import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Particles from 'react-particles-js';
import HomePageProject from './Components/Projects/HomePageProject';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <div>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path='/home'>
          <Particles 
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#E8E8E8"
            }
          }
        }
      }} />
     
      <Header></Header>
    <HomePageProject></HomePageProject>
    <Footer></Footer>
          </Route>
         
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/projects'>
            <Projects></Projects>
          </Route>
          <Route exact='*'>
            Error!
          </Route>
        </Switch>
       
      </Router>
      
     
    </div>
  );
}

export default App;
