
// import {gsap} from 'gsap'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Circle from './Circle';
import './style.css'
import './circle.css'
import './menu.css'
import './contact.css'
import './profile.css'
import './education.css'
import Profile from './Profile';
import Education from './Education';
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
      <Route path = "/profile" component = {Profile} exact/>
      <Route path = "/education" component = {Education} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
