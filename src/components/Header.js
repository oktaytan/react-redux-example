import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='container-fluid bg-info text-light p-4 text-center text-uppercase'>
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>React Redux Example</span>
      </div>
    )
  }
}

export default Header
