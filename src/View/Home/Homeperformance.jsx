import React from 'react'
import './Home.css'
import image from '../../Images/Group 74644.png'
import image2 from '../../Images/Group 74645.png'
import stock from '../../Images/stock-market 1.png'
const Homeperformance = () => {
  return (
    <> 
      <section>
        <div className='all-in-one-wrapper'>
            <div className='home-performance-main'>
            <div className='home-performance-content-div'>
                <div className='home-performance-heading-div'>
                    <h2 className='performance-head'>3 Easy <span className='performance-span'>Steps To Improve</span> Your Performance</h2>
                </div>
                <div className='performance-head-para'>
                    <p className='performance-para'>Stay on top of the market With our innovative technology, extensive
                    Product access, personalized education, and award-winning service</p>
                </div>
                 
                <div className='performance-step-wrapper'>
                    <div className='performance-step'>
                        <div className='hexagon-div d-flex justify-content-center'>
                            <div className='hexagon d-flex justify-content-center align-items-center'>
                                <div className='hexagon-img-div'>
                                   <img src={stock} alt='stock-img' />
                                </div>
                            </div>
                        </div>
                        <div className='performance-step-content'>
                        <p className='journal-trades-para'>Journal Your Trades</p>
                        <div className='journal-trade-description'>
                            <p>Journal your trades in seconds. Have peace of mind knowing your data is fully backed up and secured. The more you use your trading journal, the more TraderSync can help sharpen your trading edge</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='performance-step'>
                        <div className='hexagon-div d-flex justify-content-center'>
                            <div className='hexagon background-2 d-flex justify-content-center align-items-center'>
                                <div className='hexagon-img-div'>
                                   <img src={stock} alt='stock-img' />
                                </div>
                            </div>
                        </div>
                        <div className='performance-step-content'>
                        <p className='journal-trades-para'>Identify Your Patterns</p>
                        <div className='journal-trade-description'>
                            <p>Our trading journal software identifies patterns in your trading and reports them back to you. You can use these patterns to help you determine what is working and not for you.</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='performance-step'>
                        <div className='hexagon-div d-flex justify-content-center'>
                            <div className='hexagon background-3 d-flex justify-content-center align-items-center'>
                                <div className='hexagon-img-div'>
                                   <img src={stock} alt='stock-img' />
                                </div>
                            </div>
                        </div>
                        <div className='performance-step-content'>
                        <p className='journal-trades-para'>Boost Your Performance</p>
                        <div className='journal-trade-description'>
                            <p>Most of our trading losses coming from a set of trading mistakes. Once you have analyzed the patterns to identify which trading mistakes are making you lose money, you can focus on ensuring you avoid them</p>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
                <div className='leaf-div-img'>
                    <img src={image} alt='leaf-img' />
                </div>
                <div className='leaf-div-img2'>
                    <img src={image2} alt='leaf-img' />
                </div>
                <div className='blur-shadow-div'></div>
                <div className='blur-shadow-div2'></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Homeperformance
