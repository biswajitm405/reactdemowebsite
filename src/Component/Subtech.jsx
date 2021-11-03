import React from 'react'

const Subtech = (props) => {
    return (
        <div class="col-md-4 ">
        <div class="card my-3" style={{width: "18rem " ,backgroundColor:'#fff' ,borderRadius:'10px' ,cursor:'pointer'}}>
  <div class="card-body text-center" style={{minHeight:200}}>
    <h5 class="card-title text-black">{props.headtitle}</h5>
    
  </div>
</div>
</div>
    )
}

export default Subtech
