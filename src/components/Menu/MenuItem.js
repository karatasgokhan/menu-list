import React from 'react'

import PropTypes from 'prop-types'

import Plus from '../../UI/Icons/Plus'
export default function MenuItem ({ data, index, setDataIndex, setInputValue, inputValue, dataIndex }) {
  console.log('props.dataindex inside', dataIndex)
  console.log('index inside', index)
  console.log('value inside', inputValue)

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
            onClick={() => setDataIndex(index)}
          >
            <Plus />
          </button>
        </div>
        <div className="menu-content-block">
          <p className="menu-name">{data.DisplayName}</p>
          <p className="menu-description">{data.Description}</p>
        </div>
      </div>
      <span className="menu-price-text">{data.ListPrice} TL</span>
    </div>
  )
}

MenuItem.propTypes = {
  data: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  setDataIndex: PropTypes.any.isRequired,
  setInputValue: PropTypes.any.isRequired,
  inputValue: PropTypes.number.isRequired,
  dataIndex: PropTypes.number.isRequired
}
