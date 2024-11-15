import React from 'react'
import './Home.css'
import shadow from '../../Images/Ellipse 6.png'
import tradingimg from '../../Images/Rectangle 8.png'
import graph from '../../Images/image (1).png'
import graph2 from '../../Images/image (2).png'
import Homejournalongo from './Homejournalongo'
const Hometradingjournal = () => {
  return (
    <>
      <section>
        <div className='all-in-one-wrapper'>
            <div className='home-trading-journal'>
               <div className='shadow-img'>
                
               </div>
               <div className='tradding-journal-content-div'>
                <div className='trading-journal-left'>
                <div className='journal-content-wrapper'>
                <div>
                <h3 className='trading-journal-head'>
                    Trading Journal
                  </h3>
                  <p className='trading-journal-para'>Start recording your trades with TraderSync and let our powerful journaling show you the path to minimize your mistakes.</p>
                </div>

                <div className='journal-content-1'>
                <p className='journal-trade-para'>Journal Trades</p>
                <p className='trading-journal-para'>The simplest yet most powerful stock trading journal to date. Build a vault of valuable information that can be analyzed at any time from anywhere.</p>
                </div>

                <div className='journal-content-1'>
                <p className='journal-trade-para'>Stop Losing Profits</p>
                <p className='trading-journal-para'>Refine your performance by learning which setups are not working for you and focus on the ones that are.</p>
                </div>

                <div className='journal-content-1'>
                <p className='journal-trade-para'>Save Time</p>
                  <p className='trading-journal-para'>Import your stock trade history from your trading platform, simple and easy.</p>

                </div>
               
                  
                 
                 
                </div>
                  
                </div>
                <div className='trading-journal-right'>
                
                  <div className='trading-journal-img'>
                    <img src={tradingimg}></img>
                  </div>
                </div>
               </div>
            </div>
        </div>
      </section>

      <section>
        <div className='all-in-one-wrapper'>
          <div className='find-your-trading-edge-main'>
            <div className='find-your-trading-edge-wrapper'>
              <div className='left-trading'>
                <div className='left-trading-img'>
                  <img src={graph}></img>
                </div>
              </div>
              <div className='right-trading'>
                <div className='right-trading-content'>
                <div>
                <h3 className='right-trading-head'>Find Your Trading Edge</h3>
                <p className='right-trading-para'>Forget trying to interpret hundreds of spreadsheets of stock trading data. Replace those spreadsheets with our easy to use reports to understand your trading behavior quickly.</p>
                </div>
                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Find and Refine Your Trading Edge</p>
                  <p className='right-trading-para'>We have synthesized everything you need to know into two reports. Refine your stock trading from feedback generated reports designed to provide quick and useful information.</p>
                </div>
                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Understand Your Numbers</p>
                  <p className='right-trading-para'>We give you feedback in plain English. Let our trading journal software interpret your data.</p>
                </div>
                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Get Powerful Feedback</p>
                  <p className='right-trading-para'>Have a clear picture of your trading patterns with customizable reports that helps you understand your unique trading edge.</p>
                </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='all-in-one-wrapper'>
          <div className='smart-trades-feedback-main'>
            <div className='green-shadow'></div>
            <div className='find-your-trading-edge-wrapper'>
              <div className='left-trading background'>
                <div className='left-trading-img'>
                  <img src={graph2}></img>
                </div>
              </div>
              <div className='right-trading'>
                <div className='right-trading-content'>
                <div>
                <h3 className='right-trading-head'>Smart Trades Feedback</h3>
                <p className='right-trading-para'>Evaluate your current and future setup performances. Take the right direction based on your trading patterns</p>
                </div>
                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Simulator</p>
                  <p className='right-trading-para'>Create various trading scenarios based on your trading journal data, allowing you to quickly find your edge.</p>
                </div>
                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Evaluator</p>
                  <p className='right-trading-para'>Easily evaluate how each of your strategies performs in comparison to one another.</p>
                </div>
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='all-in-one-wrapper'>
          <div className='trading-market-main'>
            <div className='purple-shadow'></div>
            <div className='find-your-trading-edge-wrapper'>
              <div className='left-trading'>
                <div className='left-trading-img'>
                  <img src={graph2}></img>
                </div>
              </div>
              <div className='right-trading'>
                <div className='right-trading-content'>
                <div>
                <h3 className='right-trading-head'>Trading Market Replay Simulator</h3>
                <p className='right-trading-para'>Practice day trading stocks anytime now from the comfort of your browser within your TraderSync account.</p>
                </div>
                <div className='right-trading-para-head-div'>
                
                  <p className='right-trading-para'>Unlike any other market replay, you can make use of our inbuilt screeners, level II, times and sales, charting and your trades will be automatically synced with your trading journal allowing you to analyze your performance.</p>
                </div>
                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Understand Your Numbers</p>
                  <p className='right-trading-para'>We give you feedback in plain English. Let our trading journal software interpret your data.</p>
                </div>

                <div className='right-trading-para-head-div'>
                  <p className='right-trading-para-head'>Get Powerful Feedback</p>
                  <p className='right-trading-para'>Have a clear picture of your trading patterns with customizable reports that helps you understand your unique trading edge.</p>
                </div>
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Homejournalongo/>



   

     


    </>
  )
}

export default Hometradingjournal
