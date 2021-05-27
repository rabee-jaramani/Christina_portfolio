
// import {gsap} from 'gsap'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Circle from './Circle';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Certificates from './Certificates';
import References from './References';
import Sports from './Sports';

import './style.css'
import './circle.css'
import './menu.css'
import './contact.css'
import './profile.css'
import './education.css'
import './skills.css'
import './certificates.css'
import './references.css'
import './footer.css'
import './sports.css'
// import Menu from './Menu';
class App extends React.Component {

componentDidMount(){
console.log("APP Mounted")
}

render(){
  return (
<BrowserRouter>

    <div className="App">
      <Switch>
      <Route path="/" component={Circle} exact />
      <Route path = "/profile" component = {Profile}/>
      <Route path = "/education" component = {Education}/>
      <Route path = "/skills" component = {Skills}/>
      <Route path = "/certificates" component = {Certificates}/>
      <Route path = "/references" component = {References}/>
      <Route path='/sports' component={Sports}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}
}
export default App;
