import React from 'react'

const Choose = (props) => {
    return (
        <div className='col-md-4 ' >
        <div class="card my-3 h-100 mx-2" style={{width: "18rem " ,borderRadius:'15px',cursor:'pointer' }}>
  <div class="card-body " >
    <h5 class="card-title text-black text-center">{props.heading}</h5>
    <p class="card-text text-black text-center">{props.desc}</p>
  </div>
</div>
</div>
    )
}

export default Choose;
