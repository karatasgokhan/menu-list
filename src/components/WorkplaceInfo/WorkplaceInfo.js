import React from 'react'

import backgroundImage from '../../assets/img/Burger.png'
import restaurantImage from '../../assets/img/restaurantLogo.png'

import Delivery from '../../UI/Icons/Delivery'
import MinAmount from '../../UI/Icons/MinAmount'

import restaurantData from '../../data/restaurant.json'

import Score from '../Score/Score'

export default function WorkplaceInfo () {
  // eslint-disable-next-line no-undef
  console.log('restaurantData', restaurantData)

  return (
   <>
       <div className="workplace-info-wrapper"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
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
                        <Score speed={restaurantData.Speed} serving={restaurantData.Serving} flavour={restaurantData.Flavour}/>
                        <div className="order-info-item">
                            <div className="order-info">
                                <div className="icon">
                                    <MinAmount/>
                                </div>
                                <span>Min. Tutar</span>
                                <span className='value'>50,00 TL</span>
                            </div>
                            <div className="order-info">
                                <div className="icon">
                                    <Delivery/>
                                </div>
                                <span>Servis Süresi</span>
                                <span className='value'>20-30 dk.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-block">
                <div className="breadcrumb-item">
                    <a href="/">İstanbul Yemek Siparişi</a>
                </div>
                <span>{'>'}</span>
                <div className="breadcrumb-item">
                    <a href="/">Burger</a>
                </div>
            </div>
        </div>
   </>
  )
}
