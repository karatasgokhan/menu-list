import React from 'react'

import logo from '../../assets/img/logo.svg'

export default function Header () {
  return (
  <header className="header-root">
    <div className="header-wrapper">
        <div className="logo-item">
          <img src={logo} alt="Yemek Sepeti Logo" />
        </div>
    </div>
  </header>
  )
}
