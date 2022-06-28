import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { MenuItems } from './Components/MenuItem'
import './style/Navbar.css'

export default class Navbar extends Component {
  state = {clicked:false}
  handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <div>
        <nav className='NavbarItems'>
          <NavLink to="/">
          <h3 className="navbar-logo"><span style={{color:'#0092CB'}}>V</span><span style={{color:'#fd7e14'}}>R</span> <span style={{color:'#0092CB'}}>Digital Media</span></h3>
          </NavLink>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {
              MenuItems.map((item, index)=>{
                  return(
                    <li key={index}><a className={item.cName} href={item.url}><NavLink to={item.path}>{item.titile}</NavLink></a></li>
                  )
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
}
