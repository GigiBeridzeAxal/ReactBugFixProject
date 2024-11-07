import React, { useState } from 'react'

export default function Zommerwinter() {
    
    const [q1 , setq1] = useState(false)
    const [q2 , setq2] = useState(false)
    const [q3 , setq3] = useState(false)

  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
            
            <h1>ZOMER-WINTER BANDEN WISSEL</h1>


            <div className="questions">
                
            <div className="question">
                    <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">Bandenwissel: Wanneer zomerbanden of zomerwielen set plaatsen? { q1 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   }</button>
                    {q1 == true ? <div className='Answer' >
                        De verandering van winter naar zomeruur is een handig geheugensteuntje voor de winter-zomer bandenwissel. Wanneer we de klok eind maart op zomertijd zetten, is het ook tijd voor de zomerbanden wissel. Als het warmer is dan 7 °C, dan slijten uw winterbanden aanzienlijk meer en hebt u minder grip dan uw zomerbanden. Door zowel in de zomer als in de winter de juiste banden te gebruiken, bent u in elk seizoen verzekerd van de beste rijprestaties.


                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">Bandenwissel: Wanneer winterbanden of winterwielen set plaatsen? { q2 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q2 == true ? <div className='Answer' >
                        De verandering van zomer naar winteruur is een handig geheugensteuntje. voor de zomer-winter bandenwissel. Wanneer we de klok eind oktober op wintertijd zetten, is het ook tijd voor de winterbanden wissel. Als het kouder is dan 7 °C, dan hebben uw winterbanden aanzienlijk meer grip dan uw zomerbanden. Door zowel in de winter als in de zomer de juiste banden te gebruiken, bent u in elk seizoen verzekerd van de beste rijprestaties.

                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q3 == true ? setq3(false) : setq3(true) } className="questiontittle">Hoe weet u welke banden er op uw wagen zitten?{ q3 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q3 == true ? <div className='Answer' >
                        Winterbanden zijn vrij makkelijk te herkennen aan hun lamellenprofiel en aan het sneeuwvloksymbool op de zijkant van de band.

                    </div> : null}
                </div>
              




            </div>
            

            

        </div>
        <button className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
        <a href='tel:+1-0470-07-75-25' className='autocall' >Direct Contact</a>
    </div>
  )
}
