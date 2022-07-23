import React, { useState } from 'react'

import PropTypes from 'prop-types'

import useExternalHookAsState from '../../helper/useExternalHookAsState'

import Plus from '../../UI/Icons/Plus'
export default function MenuItem ({ data }) {
  const [message, setMessage] = useExternalHookAsState()
  const [inputValue, setInputValue] = useState(1)
  let currentData = []

  const addBasket = () => {
    const addItem = { data, amount: parseInt(inputValue) }
    const storageData = JSON.parse(localStorage.getItem('basket'))
    if (storageData) {
      currentData = storageData
    }
    const sameData = currentData.findIndex(
      (f) => f.data?.ProductId === data?.ProductId
    )
    if (sameData > -1) {
      currentData[sameData].amount += addItem.amount
    } else {
      currentData.push(addItem)
    }
    localStorage.setItem('basket', JSON.stringify(currentData))
    const newEvent = new CustomEvent('listener', {})
    document.dispatchEvent(newEvent)
  }

  return (
    <div className="menu-info-container">
      <div className="left-item">
        <div className="add-block">
          <div className="count-item">
            <input
              type="text"
              defaultValue={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button
            className="add-item"
            onClick={() => {
              addBasket()
              setMessage('' + message)
            }}
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
  data: PropTypes.any.isRequired
}
