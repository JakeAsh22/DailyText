import React from 'react'
import PropTypes from 'prop-types'

const Cats = ({ cats }) => {
  return (
    <div>
      {cats.map((cat) => (
        <div key={cat.id}>
          <center><img src={cat.url} height="800" width="800" /></center>
        </div>
      ))}
    </div>
  )
}

export default Cats