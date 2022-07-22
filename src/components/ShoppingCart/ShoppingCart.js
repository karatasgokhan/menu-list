/* eslint-disable react/prop-types */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingCart (props) {
  return (
    <div className="shopping-cart-wrapper">
    <div className="shopping-cart-container">
        <div className="shopping-cart-head">
            <span>YEMEK SEPETİM</span>
        </div>
        <div className="shopping-cart-address">
            <span>{props.adress}</span>
        </div>
        <div className="shopping-cart-block">
            <div className="shopping-cart-item">
                <div className="text-item">
                    <span className='menu-name'>Seçilmiş Menü (Kebap)</span>
                    <span className='menu-description'>Günün Çorbası + Beğendili Kebap + Cola</span>
                </div>
                <div className="count-item">2</div>
                <div className="price-item">46,6TL</div>
                <div className="delete-item">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </div>
        <div className="shopping-cart-total-block">
            <span>Toplam</span>
            <span>56,00TL</span>
        </div>
    </div>
    <div className="confirm-cart-container">
        <div className="confirm-cart-block">
            <span>SEPETİ ONAYLA</span>
        </div>
    </div>
</div>
  )
}
