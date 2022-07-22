import React from 'react'

import backgroundImage from '../../assets/img/Burger.png'
import restaurantImage from '../../assets/img/restaurantLogo.png'

import Delivery from '../../UI/Icons/Delivery'
import MinAmount from '../../UI/Icons/MinAmount'
import Degree from '../../UI/Icons/Degree'

export default function WorkplaceInfo () {
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
                        <p>x-Force Burger & Pizza , Arnavut Köy İlçesi </p>
                        <p>(Mustafa Kemal Paşa  Mah.)</p>
                    </div>
                    <div className="workplace-info">
                        <div className="score-item">
                            <div className="degree">
                                <Degree/>
                            </div>
                            <div className="score">
                                <span className="head">Hız</span>
                                <span className="point">8,7</span>
                            </div>
                            <div className="score">
                                <span className="head">Servis</span>
                                <span className="point">8,7</span>
                            </div>
                            <div className="score">
                                <span className="head">Lezzet</span>
                                <span className="point">8,7</span>
                            </div>
                        </div>
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
