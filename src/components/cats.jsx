import React from 'react'

const Cats = ({ cats }) => {
  return (
    <div>
      <center><h1>Cat List</h1></center>
      {cats.map((cat) => (
                
        <div class="card">
          <h1>hi</h1>
          <div class="card-body">
            <h1>Hi there</h1>
            <img src={cat.url} />
                        
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cats