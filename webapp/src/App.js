import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Header from './views/header'
import Login from './views/login'
import Logout from './views/logout'

function Home(props) {
  let user = JSON.parse(localStorage.getItem('user'))
  return(
    <div>
        <Header {...props} />
        <h2>Home</h2>
        <div style={{display:'flex',borderTop: "1px solid #e8dfdf", width:'300',padding:'40px',alignSelf:'center'}}>
          {user?
          <h4>Hello {user.username}, <br/><br/>You have succssfully logged.</h4>
          :
          <h4>Hello World!</h4>
          }
        </div>
    </div>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  renderRoutes(){
    return (
      <Router>
        <div>
          <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>} />
          <Route path="/login" render={(routeProps) => <Login {...routeProps}/>} />
          <Route path="/logout" render={(routeProps) => <Logout {...routeProps}/>} />
        </div>
      </Router>
    );
  }
  render(){
    return(
      <div>
        {this.renderRoutes()}
      </div>
    )
  }
}

export default App;