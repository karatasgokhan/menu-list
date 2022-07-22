import React from 'react'
import Menu from '../components/Menu/Menu'

import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import WorkplaceInfo from '../components/WorkplaceInfo/WorkplaceInfo'

export default function Home () {
  return (
    <div className='root'>
    <section className='left-root'>
        <ShoppingCart/>
    </section>
    <section className='right-root'>
        <WorkplaceInfo/>
        <Menu/>
    </section>
    </div>
  )
}
