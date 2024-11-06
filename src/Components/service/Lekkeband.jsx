import React, { useState } from 'react'

export default function Lekkeband() {


    const [q1 , setq1] = useState(false)


  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
            
            <h1>PECHBIJSTAND LEKKE BAND</h1>


            <div className="questions">
                
                <div className="question">
                    <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">Platte band auto weetjes: <img width={20} src="Down.png" alt="" /> </button>
                    {q1 == true ? <div className='Answer' >
                         <ul>
                            <li>1 op 4 pechgevallen zijn banden gerelateerd!</li>
                         </ul>

                    </div> : null}
                </div>



            </div>

            

        </div>
    </div>
  )
}
