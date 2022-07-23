/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import MenuItem from './MenuItem'

export default function Menu (props) {
  const [dataIndex, setDataIndex] = useState(-1)
  const [inputValue, setInputValue] = useState(1)
  console.log('dataIndex', dataIndex)
  console.log('data', props.data.Products[dataIndex])
  console.log('value', inputValue)
  return (
    <div className="menu-wrapper">
      <div className="menu-head">
        <p>{props.data.DisplayName}</p>
      </div>
      {props.data.Products.map((item, index) => {
        return (
          <MenuItem
            key={index}
            data={item}
            index={index}
            setDataIndex={setDataIndex}
            setInputValue={setInputValue}
            inputValue={inputValue}
            dataIndex={dataIndex}
          />
        )
      })}
    </div>
  )
}
