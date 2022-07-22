import React from 'react'

export default function Breadcrumb () {
  return (
    <div className="breadcrumb-block">
        <div className="breadcrumb-item">
            <a href="/">İstanbul Yemek Siparişi</a>
        </div>
        <span>{'>'}</span>
        <div className="breadcrumb-item">
            <a href="/">Burger</a>
        </div>
    </div>
  )
}
