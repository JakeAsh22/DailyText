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
         <center><img src={cat.url} height="800" width = "800"/></center>        
        </div>
      ))}
    </div>
  )
}

export default Cats