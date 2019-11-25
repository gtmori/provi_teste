import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
    }}

    render(){
      return(
        <header className ="header">
          <img className ="profile_img" src='/images/profile.jpg'></img>
          <div className ="profile_info">
            <span><span className='text_Bold'>Nome: </span>Guilherme Mori</span>
            <span><span className='text_Bold'>E-mail: </span>gtm.mori@gmail.com</span>
            <span><span className='text_Bold'>Telefone: </span>(11)950596070</span>
          </div>
        </header>
      )
    }
}

export default Header