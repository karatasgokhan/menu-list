import React from 'react'

import PropTypes from 'prop-types'

import Degree from '../../UI/Icons/Degree'
import ScoreItem from './ScoreItem'

export default function Score ({ speed, serving, flavour }) {
  const score = [
    {
      name: 'Hız',
      value: speed
    },
    {
      name: 'Servis',
      value: serving
    },
    {
      name: 'Lezzet',
      value: flavour
    }
  ]

  return (
    <div className="score-item">
      <div className="degree">
        <Degree />
      </div>
      {score.map((item, index) => {
        return <ScoreItem key={index} name={item.name} value={item.value} />
      })}
    </div>
  )
}

Score.propTypes = {
  speed: PropTypes.number.isRequired,
  serving: PropTypes.number.isRequired,
  flavour: PropTypes.number.isRequired
}
