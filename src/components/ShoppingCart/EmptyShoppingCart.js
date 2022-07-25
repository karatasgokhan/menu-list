import React from 'react'

import Basket from '../../UI/Icons/Basket'

export default function EmptyShoppingCart () {
  return (
    <div className='empty-shopping-cart'>
        <Basket/>
        <span>Sepetiniz Henüz Boş</span>
    </div>
  )
}
