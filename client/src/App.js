import React, { Component } from 'react';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './style/App.css';

import Home from './components/Home';

//----------
class App extends Component {
 
  //----------
  state = {
    response: ''
  };

  //----------
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  //----------
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  //----------
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
              <Switch>
                <Route exactly component={Home} pattern="/" />            

              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


/*                <Route exactly component={Login} pattern="/member/login" />            
                <Route exactly component={Signup} pattern="/member/signup" />            
                <Route exactly component={Search} pattern="/app" />     */