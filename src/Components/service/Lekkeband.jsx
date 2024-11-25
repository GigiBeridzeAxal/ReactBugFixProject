import React, { useState } from 'react'
import Orderpechbjistan from '../Orders/Orderlekkband'

export default function Lekkeband() {


    const [q1 , setq1] = useState(false)
    const [q2 , setq2] = useState(false)
    const [q3 , setq3] = useState(false)
    const [q4 , setq4] = useState(false)
    const [q5 , setq5] = useState(false)
    const [q6 , setq6] = useState(false)
    const [q7 , setq7] = useState(false)
    const [q8 , setq8] = useState(false)
    const [q9 , setq9] = useState(false)

    const [map , setmap] = useState(false)





  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
        {map == true ? null :<> <button onClick={() => setmap(true)} className='button1' >PRIJSOFFERTE + DIRECT CONTACT</button>
        <a href='tel:0032476452948' className='autocall' >DIRECT CONTACT</a></> }

            {map == true ? null :            <h1>PECHBIJSTAND LEKKE BAND</h1>}


            {map == true ? <Orderpechbjistan></Orderpechbjistan> : <div className="questions">
                
               
           
                   

                   
                  
    
                  
    
                    <div className="question">
                        <button onClick={() => q8 == true ? setq8(false) : setq8(true) } className="questiontittle">{ q8 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Hoe verloopt onze pechverhelping?  </button>
                        {q8 == true ? <div className='Answer' >
                           <img className='answerimage' src="Image1.jpg" alt="" />
                               
    
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q9 == true ? setq9(false) : setq9(true) } className="questiontittle">{ q9 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Aan welke voertuigen werken wij? </button>
                        {q9 == true ? <div className='Answer' >
                            <img className='answerimage' src="Image2.jpg" alt="" />
    
                        </div> : null}
                    </div>
    
    
    
    
    
                </div> }
           
            

            

        </div>

       
    </div>
  )
}
