import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div class="col-md-3 shadow p-3 mb-5 bg-body rounded"  >
        <div class="card my-3 h-100 mx-5" style={{width: "18rem " ,borderRadius:'15px',boxSizing:'border-box',cursor:'pointer'}}>
  <div class="Subcard ">
    <h5 class="card-title text-black text-center">{props.headtitle}</h5>
    <p class="card-text text-black text-center">{props.description}</p>
  </div>
</div>
</div>
    )
}

export default Card
