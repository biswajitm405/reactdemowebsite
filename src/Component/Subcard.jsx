import React from 'react'

const Subcard = (props) => {
    return (
        <div class="col-md-3 "  >
        <div class="card my-3 h-100" style={{width: "18rem " ,borderRadius:'15px' ,cursor:'pointer'}}>
  <div class="card-body " >
    <h5 class="card-title text-black text-center">{props.headtitle}</h5>
  </div>
</div>
</div>
    )
}

export default Subcard
