import React from 'react'
import logo from "../src/Asset/logo1.png"

const Navbar = () => {
    return (
        <>
        <div className="container-fluid">
        <div className="row">
      

<nav className="navbar navbar-expand-lg navbar-light bg-light responsive mb-2">
  <div className="container-fluid">
  <img src={logo} alt="img" />
    <a className="navbar-brand ml" href="#">SQUBIX DIGITAL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SQUBIX
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">ABOUT</a></li>
            <li><a className="dropdown-item" href="#">CAREER</a></li>
            
            <li><a className="dropdown-item" href="#">CONTACT</a></li>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOCKCHAIN
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">ICO,IEO</a></li>
            <li><a className="dropdown-item" href="#">smart contract development</a></li>
            
            <li><a className="dropdown-item" href="#">NFT/DeFI</a></li>
            <li><a className="dropdown-item" href="#">daPPS development</a></li>
          </ul>
        </li>
        <li className="nav-items">
          <a className="nav-link active" aria-current="page" href="#">DIGITAL WALLET</a>
        </li>
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DIGITAL EXCAHNGE
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">WEB & Mobile Development</a></li>
            <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
          </ul>
        </li>
      </ul>
      {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Other Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">DEX /CE</a></li>
            <li><a className="dropdown-item" href="#">DSE _ Digital Stock Exchange</a></li>
          </ul>
          </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">TRAINING & EDUCATION</a>
          </li> */}
    
</div>
</div>
</nav>
 </div>

</div>


</>
    )
}

export default Navbar
