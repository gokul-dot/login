import React,{ Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './Signup';
import firebase from './Fire';
import Login from './Login'
class App extends Component {
  constructor(props){
    super(props)
  this.state={
       user:''
  }
}
componentDidMount(){
  this.authListener();
}
authListener(){
  firebase.auth().onAuthStateChanged((user)=>{
if(user){
  this.setState({user});
}
else{
    this.setState({user:null})
}
  })
}
  render(){
  return (
    <div className="App">
      <h1>login & signup</h1>
      <Router>
        <Link className="sign" to="/signup"><button className="btn1">signup</button></Link>
        <Link className="sign" to="/login"><button className="btn1">login</button></Link>
        <Switch>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      </Switch>
      </Router>

    </div>
  );
}
}
export default App;
