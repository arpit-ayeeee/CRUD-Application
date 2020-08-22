import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import '../node_modules/font-awesome/css/font-awesome.css'
import User from './components/User';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import CreatePost from './components/Create';
import Display from './components/Display';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Display} />
            <Route exact path="/user" component={User} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/search" component={Search} />
            <Route component={NotFound} />  {/*For default*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
