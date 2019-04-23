import React from 'react'
import { Menu } from 'semantic-ui-react'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem:'Home'
    }
  }
  
  handleItemClick = (e, {name} ) => {
    this.setState({ activeItem: name })
    if(name =='Home')
      this.props.history.push('/')
    else
      this.props.history.push('/'+name.toLowerCase())
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick}>
        Login
        </Menu.Item>

        <Menu.Item
          name='Logout'
          active={activeItem === 'Logout'}
          onClick={this.handleItemClick}
        >
          Logout
        </Menu.Item>
      </Menu>
    )
  }
}
export default Header
