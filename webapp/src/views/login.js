import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Header from './header'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        username:'',
        password:''
      }
    }
  }
  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user && user.username)
      this.props.history.push('/')
  }
  onForm = (event, frmData) => {
    let data = this.state.data
    const item = frmData ? frmData : event.target;
    if(!data[item.name])
      data[item.name]={}
    data[item.name]=item.value
    this.setState(data)
  }
  onLogin(){
    let data = this.state.data;
    localStorage.setItem('user',JSON.stringify(data))
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <h2>Login</h2>
        <div style={{display:'flex',borderTop: "1px solid #e8dfdf", width:'300',padding:'40px',alignSelf:'center'}}>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input onChange={this.onForm} name='username' value={this.state.data.username} placeholder='username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input onChange={this.onForm} type="password" name='password' value={this.state.data.password} placeholder='password' />
          </Form.Field>
          <Button type='submit' onClick={() => this.onLogin()}>Submit</Button>
        </Form>
      </div>
      </div>
    )
  }
}
