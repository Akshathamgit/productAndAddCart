import React from 'react'
import Header from './Header'
import './Home.css'
import Footers from './Footers'

function Home() {
  return (
    <div>
     {/*  <Header/> */}
      <h1 className='commerce'>E- Commerce </h1>
      <div className='container'>
      <div className='box1'>
      <img src="https://thumbs.dreamstime.com/b/happy-shopping-girl-11220507.jpg" alt=""/>
      </div>
      <div className='box2'>
        <h1 className='summer'>Summer Sale on Live</h1>
        <div>
          <p className='desc'>summer has arrived.... and so has our new collection</p>
          <button className='btn'>Shop Now</button>
        </div>
       
         
      </div>
      </div>
      <Footers/>
    </div>
   
  )
}

export default Home