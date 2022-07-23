import React from 'react'

import PropTypes from 'prop-types'

import Delivery from '../../UI/Icons/Delivery'
import MinAmount from '../../UI/Icons/MinAmount'
import OrderInfoItem from './OrderInfoItem'

export default function OrderInfo ({ minimumPrice, deliveryTime }) {
  const orderInfo = [
    {
      name: 'Min. Tutar',
      value: minimumPrice,
      icon: <MinAmount />
    },
    {
      name: 'Servis Süresi',
      value: deliveryTime,
      icon: <Delivery />
    }
  ]
  return (
    <div className="order-info-item">
      {orderInfo.map((item, index) => {
        return (
          <OrderInfoItem
            key={index}
            icon={item.icon}
            name={item.name}
            value={item.value}
          />
        )
      })}
    </div>
  )
}

OrderInfo.propTypes = {
  minimumPrice: PropTypes.number.isRequired,
  deliveryTime: PropTypes.number.isRequired
}
