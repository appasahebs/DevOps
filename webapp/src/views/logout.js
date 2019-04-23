import React, { Component } from 'react'
import Header  from './header'
export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user && user.username){
      localStorage.removeItem('user')
    }
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Header {...this.props}/>
        Logout Page
      </div>
    )
  }
}
