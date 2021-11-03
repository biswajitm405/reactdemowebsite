import React from 'react'

const Gird = (props) => {
    return (
<div class="col-md-4 ">
        <div class="card my-4 h-100" style={{width: "18rem " ,backgroundColor:'#065d9a' ,borderRadius:'10px' }}>
  <div class="card-body">
    <h5 class="card-title text-white">{props.heading}</h5>
    <p class="card-text text-white">{props.desc}</p>
  </div>
</div>
</div>
    )
}

export default Gird
