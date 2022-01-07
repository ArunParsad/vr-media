
import { Redirect, Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar';

function App() {
  return (
   <>
   <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/services">
      <Service />
      </Route>
      <Route exact path="/about">
      <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
   </>
  );
}

export default App;
