import React from 'react'

import Menu from '../components/Menu/Menu'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import WorkplaceInfo from '../components/WorkplaceInfo/WorkplaceInfo'

import menuData from '../data/menu.json'
import restaurantData from '../data/restaurant.json'

export default function Home () {
  return (
    <div className="root">
      <section className="left-root">
        <ShoppingCart adress={restaurantData.AddressText} />
      </section>
      <section className="right-root">
        <WorkplaceInfo />
        {menuData.Menu.map((item, index) => {
          return <Menu key={index} data={item} />
        })}
      </section>
    </div>
  )
}
