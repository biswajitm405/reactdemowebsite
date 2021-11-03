import React from 'react'
import  Navbar  from './Navbar'
import "../src/bootstrap-dist/css/bootstrap.min.css"
import Carousel from "../src/Component/Carousel"
import Gird from './Component/Gird'
import Gird1 from './Component/Gird1'
import GridData from './Component/GridData'
import CardData from './Component/CardData'
import Card from "../src/Component/Card" 
import Subcard from "../src/Component/Subcard"
import Subcarddata from "./Component/Subcarddata"
import Subtech from "../src/Component/Subtech"
import Subtechdata from "./Component/Subtechdata"
import Choose from "../src/Component/Choose"
import Choosedata from "./Component/Choosedata"

const App = () => {

    return (
        <div className='Container'>
    
            <Navbar/>
            <Carousel/>
            <div className="row row-cols-8 row-cols-md-4 g-8 col-10 mx-auto" >
{
    GridData.map((val, ind)=>{
        return <Gird
        heading={val.heading}
       desc={val.desc}
        />
    })
    }
</div>
            <Gird1/>
            <h1 className="text-center">BlockChain Offerings</h1>
            <p className="text-center">Enterprise blockchain services to build a better future.</p>
            <hr />
            
       <div className="row row-cols-8 row-cols-md-4 g-8 ">
       {
           CardData.map((val, ind)=>{
                return <Card
                headtitle={val.headtitle}
                description={val.description}
                />
            })
            }
       </div>
       <div>
           <h1 className="text-center">BLOCKCHAIN Use Cases</h1>
           <hr />
       </div>
       <div className="row row-cols-8 row-cols-md-4 g-8 col-10 mx-auto">
       {
           Subcarddata.map((val, ind)=>{
                return <Subcard
                headtitle={val.headtitle}
                
                />
            })
            }
            </div>
            <br />
            <div>
                <h1 className="text-center">Our Tech Expertise</h1>
                <hr />
            </div>
            <div className="row row-cols-8 row-cols-md-3 g-8 col-10 mx-auto">
            {
           Subtechdata.map((val, ind)=>{
                return <Subtech
                headtitle={val.headtitle}
                
                />
            })
            }
            </div>
            <div>
                <h1 className="text-center">Why Choose Squbix</h1>
                <hr />
                <div className="row row-cols-8 row-cols-md-4 g-8 col-10 mx-auto">
            {
                Choosedata.map((val, ind)=>{
                return <Choose
                heading={val.heading}
                desc={val.desc}
                />
            })
            }
            </div>
            </div>
            </div>
            
            
    )
}

export default App
