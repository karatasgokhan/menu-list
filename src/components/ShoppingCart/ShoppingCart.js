import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import EmptyShoppingCart from './EmptyShoppingCart'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCart ({ adress }) {
  const [message, setMessage] = useState('')
  const basketData = JSON.parse(localStorage.getItem('basket'))
  const [cost, setCost] = useState('')

  const updatedFunc = (parameter) => {
    setMessage(parameter)
    console.log(message)
  }

  useEffect(() => {
    const totalPrice = basketData.reduce(
      (pre, basket) => pre + basket?.amount * parseInt(basket?.data?.ListPrice),
      0
    )
    setCost(totalPrice)
  }, [basketData])

  useEffect(() => {
    document.addEventListener('listener', updatedFunc)
  }, [])

  return (
    <div className="shopping-cart-wrapper">
      <div className="shopping-cart-container">
        <div className="shopping-cart-head">
          <span>YEMEK SEPETİM</span>
        </div>
        <div className="shopping-cart-address">
          <span>{adress}</span>
        </div>
        {basketData?.length < 1
          ? (
          <EmptyShoppingCart />
            )
          : (
          <div className="shopping-cart-block">
            {basketData?.map((item, index) => {
              return (
                <ShoppingCartItem
                  key={index}
                  item={item}
                  index={index}
                  basketData={basketData}
                  setMessage={setMessage}
                />
              )
            })}
          </div>
            )}
        {basketData?.length > 0 && (
          <div className="shopping-cart-total-block">
            <span>Toplam</span>
            <span>{cost} TL</span>
          </div>
        )}
      </div>
      {basketData?.length > 0 && (
        <div className="confirm-cart-container">
          <div className="confirm-cart-block">
            <span>SEPETİ ONAYLA</span>
          </div>
        </div>
      )}
    </div>
  )
}

ShoppingCart.propTypes = {
  adress: PropTypes.string.isRequired
}
