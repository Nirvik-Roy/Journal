import React, { useState } from 'react'
import "./Register.css"
const SingnUp = () => {
  const [show,setshow] = useState(false)
  const [show2,setshow2] = useState(false)
  const toggleShow = () => {
   setshow(!show)
  }
  const toggleShow2 = () => {
    setshow2(!show2)
   }
  return (
    <>
                <section>
            <div className='all-wrapper-div'>
             <div className='sign-up-background-main'>
                <div className='sign-in-box-main'>
                    <div className='sign-in-form-box'>
                        <h3 className='text-center sign-in-head'>Sign Up</h3>
                        <form>
                            <div className='form-div mt-3'>
                            <label className='email-label'>Enter First Name</label>
                            <div className='input-div'>
                                <input type='text' placeholder='Lorem' className='email-input'/>
                            </div>
                            </div>
                            <div className='form-div mt-3'>
                            <label className='email-label'>Enter Last Name</label>
                            <div className='input-div'>
                                <input type='text' placeholder='Ipsum' className='email-input'/>
                            </div>
                            </div>
                            <div className='form-div mt-3'>
                            <label className='email-label'>Enter Email-Id</label>
                            <div className='input-div'>
                                <input type='email' placeholder='Loremipusum@gmail.com' className='email-input'/>
                            </div>
                            </div>

                            <div className='form-div mt-3'>
                            <label className='email-label'>Enter Password</label>
                            <div className='input-div relative'>
                                <input type={show == true ? 'text' : 'password'} className='password-input'/>
                            { !show && <i onClick={toggleShow} class="fa-solid fa-eye-slash fa-flip-horizontal"></i>}
                              { show &&  <i onClick={toggleShow} class="fa-solid fa-eye fa-flip-horizontal"></i>}
                            </div>
                           
                            </div>
                            <div className='form-div mt-3'>
                            <label className='email-label'>Confirm Password</label>
                            <div className='input-div relative'>
                                <input type={show2 == true ? 'text' : 'password'} className='password-input'/>
                            { !show2 && <i onClick={toggleShow2} class="fa-solid fa-eye-slash fa-flip-horizontal"></i>}
                              { show2 &&  <i onClick={toggleShow2} class="fa-solid fa-eye fa-flip-horizontal"></i>}
                            </div>
                          
                            </div>

                            <div className='login-btn-div'>
                                <button className='login-btn'>Login</button>
                            </div>
                            
                        </form>
                      
                    </div>
                    
                </div>
             </div>    
            </div>
          </section>
    </>
  )
}

export default SingnUp
