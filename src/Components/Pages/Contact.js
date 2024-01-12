import React from 'react'
import '../Styles/Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'
import menu  from '../svg/menu.svg'
import Navbar2 from './Navbar2'


const Contact = () => {
  return (
    <>
    <div className='con1'>
        <div className='con2'>
         
       <Navbar2/>
       <div className='con3'>
            <div className='con003'>

            <div className='con0031'>
            <div className='con4'> GET IN TOUCH <br></br>WITH US</div>
    <br></br>
<div className='con5'>Lorem ipsum dolor sit amet consectetur. Netus nec volutpat porta eget magna venenatis neque purus ac. Nisl sed pellentesque ornare nunc. Hac donec et amet pellentesque. Diam nisi eu est nec a diam dolor eget. Sit gravida condimentum pretium sit turpis sit luctus dui viverra.
<br></br>

Cursus morbi ullamcorper vulputate sed. Nascetur morbi vel id suspendisse sit.
<br></br>
Eget vel enim consectetur quisque lorem ut venenatis non. Scelerisque sed non.</div>
            </div>

            <div className='con0032'>
              
              <hr></hr>
              <div className='con6'>
              <div className='con7'>
              <div className='con71'>Contact</div>
              <div className='con72'>Tel.+91 245 151 5151</div>
              <div className='con72'>WhatsApp.+91 245 151 5151</div>
              <div className='con72'>Email: enquiry@kanesmith.com</div>
              
              </div>
              <div className='con8'>
              <div className='con81'>Location</div>
              <div className='con82'>Cursus morbi ullamcorper vulputate sed. Nascetur morbi vel id suspendisse sit.</div>
              
              </div>
              </div>
              
              
              <hr></hr>
                          </div>


                          </div>

            <div className='con0033'>
            <div className="p47">
         <label className="p471">Details</label>
         <div className="p48">
         <input placeholder="Full Name*" className="p481"  id='p481'></input>
         <input placeholder="Phone*" className="p482 "  id='p481'></input>
         </div>
         <input placeholder="Email*" className="p483"  id='p481'></input>

     </div>


     
   <div className="p49" id='p49'>
     <div className="p491">
       <label className="p4911">Message</label>
       <textarea id="p4912" name="w3review" rows="8" cols="50" className="p4912" placeholder="Please Write Your Requests in English."></textarea>
     </div>
   </div>
      
    
    <div className="p50">
       <button className="p501">Enquire Now</button>
    </div>



  

            </div>

 

          </div>  
          <div className='gap'>

          </div>
          <Footer/> 
        </div>
    </div>
    </>
  )
}

export default Contact