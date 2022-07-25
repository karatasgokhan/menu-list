import React from 'react'

import backgroundImage from '../../assets/img/Burger.png'
import restaurantImage from '../../assets/img/restaurantLogo.png'

import restaurantData from '../../data/restaurant.json'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import OrderInfo from '../OrderInfo/OrderInfo'

import Score from '../Score/Score'

export default function WorkplaceInfo () {
  return (
    <>
      <div
        className="workplace-info-wrapper"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="workplace-info-block">
          <div className="logo-item">
            <img src={restaurantImage} alt="Restaurant" />
          </div>
          <div className="workplace-info-item">
            <div className="workplace-info-head">
              <p>{restaurantData.DisplayName}</p>
              <p>({restaurantData.ShortAdress})</p>
            </div>
            <div className="workplace-info">
              <Score
                speed={restaurantData.Speed}
                serving={restaurantData.Serving}
                flavour={restaurantData.Flavour}
              />
              <OrderInfo
                minimumPrice={restaurantData.MinimumPrice}
                deliveryTime={restaurantData.DeliveryTime}
              />
            </div>
          </div>
        </div>
        <Breadcrumb />
      </div>
    </>
  )
}
