import React from 'react'

const Cats = ({ cats }) => {
  return (
    <div>
      <center><h1>Cat List</h1></center>
      <h2></h2>
      {cats.map((cat) => (
        <div key={cat.id}>
          <h1>hi</h1>
          <h1>Hi there</h1>
          <img src={cat.url} />       
        </div>
      ))}
    </div>
  )
}

export default Cats