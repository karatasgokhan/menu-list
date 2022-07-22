/* eslint-disable react/prop-types */
import React from 'react'

import Degree from '../../UI/Icons/Degree'
import ScoreItem from './ScoreItem'

export default function Score (props) {
  const score = [
    {
      name: 'Hız',
      value: props.speed
    },
    {
      name: 'Servis',
      value: props.serving
    },
    {
      name: 'Lezzet',
      value: props.flavour
    }
  ]

  return (
    <div className="score-item">
    <div className="degree">
        <Degree/>
    </div>
    {
        score.map((item, index) => {
          return (
            <ScoreItem key={index} name={item.name} value={item.value}/>
          )
        })
    }
</div>
  )
}
