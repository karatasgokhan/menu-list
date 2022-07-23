/* eslint-disable react/prop-types */
import React from 'react'

import Plus from '../../UI/Icons/Plus'

export default function MenuItem (props) {
  console.log('props.dataindex inside', props.dataIndex)
  console.log('index inside', props.index)
  console.log('value inside', props.inputValue)

  return (
    <div className="menu-info-container">
      <div className="left-item">
        <div className="add-block">
          <div className="count-item">
            <input
              type="text"
              defaultValue={1}
              onInput={() => console.log('On input')}
              onChange={() => console.log('Change')}
            />
          </div>
          <button
            className="add-item"
            onClick={() => props.setDataIndex(props.index)}
          >
            <Plus />
          </button>
        </div>
        <div className="menu-content-block">
          <p className="menu-name">{props.data.DisplayName}</p>
          <p className="menu-description">{props.data.Description}</p>
        </div>
      </div>
      <span className="menu-price-text">{props.data.ListPrice} TL</span>
    </div>
  )
}
