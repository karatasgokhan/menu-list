/* eslint-disable react/prop-types */
import React from 'react'

export default function ScoreItem (props) {
  return (
    <div className="score">
        <span className="head">{props.name}</span>
        <span className="point">{props.value}</span>
    </div>
  )
}
