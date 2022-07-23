import React from 'react'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingCartItem ({
  item,
  basketData,
  setMessage,
  index
}) {
  return (
    <div className="shopping-cart-item">
      <div className="text-item">
        <span className="menu-name">{item.data.DisplayName}</span>
        <span className="menu-description">{item.data.Description}</span>
      </div>
      <div className="count-item">{item.amount}</div>
      <div className="price-item">{item.data.ListPrice} TL</div>
      <div
        className="delete-item"
        onClick={() => {
          basketData.splice(index, 1)
          localStorage.setItem('basket', JSON.stringify(basketData))
          setMessage(Math.random())
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  )
}

ShoppingCartItem.propTypes = {
  item: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  basketData: PropTypes.any.isRequired,
  setMessage: PropTypes.any.isRequired
}
