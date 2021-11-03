import React from 'react'
import img from "../Asset/0001.png"
const Gird1 = () => {
    return (
        <div
        className="container-fluid mt-3">
  <div
  className="row">
    <div
    className="col-sm-8 p-3 bg-white text-black">
        <h1>Shift To BLOCKCHAIN Revolution</h1>
        <p>
        Distributed Ledger : Trusted, efficient and immutable way to share copy of all transactions with 
        every participant in the blockchain network.
        Consensus Algorithm : Every transaction is validated and inserted into the shared ledgers as 
        per the common rule called Consensus. Some Popular Consensus protocol are Proof of work,
        Proof of stake, Proof of Authority.
        Smart Contracts/Transactions : Every transaction is excuted based on certain rules or businesses
        logic as per the program code written in smart contracts.

        We in SQUBIX believe that the growth of a business directly / indirectly depends on adaptation 
        of new technologies. And its been 5 years we are helping businesses to grow by adapting
        technologies in this technology driven world. We create an innovative way to help businesses
        transit themselves from conventional technology to blockchain technology by rigorously 
        researching and developing our team in SQUBIX. We have 5 years of real-world experience
        providing block chain, digital banking, digital wallet and crypto currency related solutions to
        industries.
        </p>
    </div>
    <div
    className="col-sm-4 p-3  text-white">
    <img src={img}alt="img" className="flex-center" />
    </div>
  </div>
</div>
    )
}

export default Gird1
