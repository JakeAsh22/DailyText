import React from 'react'

const Cats = ({ cats }) => {
    return (
        <div>
            <center><h1>Cat List</h1></center>
            {cats.map((cat) => (
                <div class="card">
                    <div class="card-body">
                        <img src={cat.url} />
                        <h1>Hi there</h1>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cats