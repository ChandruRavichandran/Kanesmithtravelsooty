import React, { useState,useReducer } from "react";
import '../Styles/Plan.css'
import Navbar2 from './Navbar2'




const Plan = () => {
 const [count,setcount]=useState(0);
 const [countTwo,setcountTwo]=useState(0);
  

 const increment =()=>{
  setcount((count)=>
   count + 1
  )
  // adult(count + 1)
  }
  
  const decrement =()=>{
  setcount(count-1)
  if(count === 0){
    setcount(0)
    // alert("Only 3 Members allowed")
  }
  // adult(count -1)
}


const incrementTwo =()=>{
  setcountTwo((countTwo)=>
   count + 1
  )
  // adult(count + 1)
  }
  
  const decrementTwo =()=>{
  setcountTwo(countTwo-1)
  if(count === 0){
    setcount(0)
    // alert("Only 3 Members allowed")
  }
  // adult(count -1)
}

  return (
    <>
    <div className='p1'>
        <div className='p2'>
        <Navbar2/>
        <div className='p01'>
         

             <div className="p3">
                <div className="p31"><img src='/img/5.png'></img></div>
             </div>

             <div className="p4">
                <div  className="p41" >

                  <div  className="p42">
                  <div className="p421">Plan A Trip</div>
                  <div className="p422">Lorem ipsum dolor sit amet consectetur. Viverra eu quis nisi sed proin amet quam at. Sed id sit rutrum ac orci eu facilisi dui volutpat.</div>

                  </div>

                  <div  className="p43">
                    <form className="p431">
                          <label className="p4311">NUMBER OF TRAVELLERs</label>

                           <div className="p432">
                             <div className="p44">
                              <div className='p45'>
                              <div className="adubtn01">
                     <div className="adubtn">
                      
                          <div className='adubtn1' onClick={decrement} >-</div>
                         <div className='ct1'>{count}</div>
                         <div className='adubtn2'   onClick={increment} >+</div>
                          
                     </div>
                         <div className="adu1">Adults</div>
                      </div>
                    
                       <br></br>

                       <div className="adubtn02">
                       <div className="chbtn"> 
                           <div className='chbtn1' onClick={decrementTwo}>-</div>
                          <div className='ct2'>{countTwo}</div>
                          <div className='chbtn2'  onClick={incrementTwo}  >+</div>
                     </div>
                         <div className="adu2">Children 5-11 yrs</div>
                       </div>
      


</div>
</div>
                        
                       </div>
                       

                    <div className="p46">
                      <div className="p47">
                          <label className="p471">Details</label>
                          <div className="p48">
                          <input placeholder="Full Name*" className="p481"></input>
                          <input placeholder="Phone*" className="p482"></input>
                          </div>
                          <input placeholder="Email*" className="p483"></input>

                      </div>
                    </div>


                    <div className="p49">
                      <div className="p491">
                        <label className="p4911">Message</label>
                        <textarea id="w3review" name="w3review" rows="8" cols="50" className="p4912" placeholder="Please Write Your Requests in English."></textarea>
                      </div>
                    </div>
                       
                     
                     <div className="p50">
                        <button className="p501">Enquire Now</button>
                     </div>

                     <br></br>
                     <br></br>
                     <br></br>
                    </form>
      
                  </div>

                </div>
             </div>
        </div>

        </div>
    </div>
    
    </>
  )
}

export default Plan