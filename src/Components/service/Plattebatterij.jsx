import React, { useState } from 'react'
import OrderPlattebatterij from '../Orders/OrderPlattebatterij'

export default function Plattebatterij() {
    
    const [q1 , setq1] = useState(false)
    const [q2 , setq2] = useState(false)
    const [q3 , setq3] = useState(false)

   const [order , setorder ] = useState(false)

  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
        {order == true ? null : <> <button onClick={() => setorder(true)} className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
        <a href='tel:0032476452948' className='autocall' >Direct Contact</a></>  }
            
            {order == true ? null :             <h1>PECHBIJSTAND PLATTE BATTERIJL</h1>}


             {order == true ? <OrderPlattebatterij></OrderPlattebatterij> :     <div className="questions">
                
                <div className="question">
                        <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">{ q1 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Batterij plat. Hoe kan ik de wagen starten?</button>
                        {q1 == true ? <div className='Answer' >
                            De wagen in gang duwen:
                            <li>Zet het contact aan</li>
                            <li>Zet alle stroomverbruikers af (lichten, radio, airco, …</li>
                            <li>Zet de wagen in 2de versnelling en druk de koppeling in</li>
                            <li>Laat iemand de auto zo hard mogelijk duwen en laat geleidelijk aan de koppeling los</li>
                            D.m.v. Startkabels of batterij booster:
                            Verbind steeds eerst de rode klem, nadien de zwarte klem (massa). Opgelet, een batterij booster kan de boordcomputer beschadigen!
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">{ q2 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }De batterij van mijn elektrische wagen is plat. Hoe lossen jullie dit op?  </button>
                        {q2 == true ? <div className='Answer' >
                            Het heeft weinig nut de batterij van de wagen op te laden. Met een generator zou je na 1 uur laden net voldoende hebben om ongeveer 10kilometer te rijden. Het is veel kosten efficienter om de wagen te takelen naar een laadpaal.
                        </div> : null}
                    </div>
    
    
    
                </div>
                
    
                 }
       

        </div>

      
    </div>
  )
}
