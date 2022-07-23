/* eslint-disable react/prop-types */
import React from 'react'

import Delivery from '../../UI/Icons/Delivery'
import MinAmount from '../../UI/Icons/MinAmount'
import OrderInfoItem from './OrderInfoItem'

export default function OrderInfo (props) {
  const orderInfo = [
    {
      name: 'Min. Tutar',
      value: props.minimumPrice,
      icon: <MinAmount />
    },
    {
      name: 'Servis Süresi',
      value: props.deliveryTime,
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
