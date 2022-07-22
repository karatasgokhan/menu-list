/* eslint-disable react/prop-types */
import React from 'react'

export default function MenuItem (props) {
  return (
    <div className="menu-info-container">
        <div className="left-item">
            <div className="add-block">
                    <div className="count-item">
                        <input type="number" />
                    </div>
                <div className="add-item">+</div>
            </div>
            <div className="menu-content-block">
                <p className="menu-name">{props.data.DisplayName}</p>
                <p className="menu-description">{props.data.Description}</p>
            </div>
        </div>
        <div className="menu-price-block">
            <span>{props.data.ListPrice}</span>
        </div>
    </div>
  )
}
