import React, { useState } from 'react'

import PropTypes from 'prop-types'

import MenuItem from './MenuItem'

export default function Menu ({ data }) {
  const [dataIndex, setDataIndex] = useState(-1)
  const [inputValue, setInputValue] = useState(1)
  console.log('dataIndex', dataIndex)
  console.log('data', data.Products[dataIndex])
  console.log('value', inputValue)
  return (
    <div className="menu-wrapper">
      <div className="menu-head">
        <p>{data.DisplayName}</p>
      </div>
      {data.Products.map((item, index) => {
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

Menu.propTypes = {
  data: PropTypes.any.isRequired
}
