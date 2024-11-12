import React from 'react'
import './Home.css'
import Header from '../../Layout/Header'
import shadow from '../../Images/Ellipse 3.png'
import banner from '../../Images/image.png'
const HomeBanner = () => {
  return (
    <>
     <section>
        <div className='all-in-one-wrapper'>
            <div className='home-banner-main'>
            <Header/>
            <div className='banner-heading-wrapper'>
            <div className='home-heading-div'>
            <h1 className='home-heading'>Unique Solution & Innovative
           <span className='home-head-span'> approach to Trading</span> </h1>

            </div>
            <div className='home-para-div'>
                <p className='home-para'>Lorem Ipsum is simply dummy text of the 
                industry. Lorem Ipsum Dolor</p>
            </div>
              
             <div className='early-access-btn-wrapper'>
                <button className='early-access-btn'>Get Early Access</button>
                <button className='watch-demo-btn'>Watch Demo</button>
             </div>
             <div className='blur-div'></div>
             <div className='banner-img'>
                <img src={banner}></img>
             </div>
            </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default HomeBanner
