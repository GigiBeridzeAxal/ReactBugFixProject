import React, { useState } from 'react'

export default function Pechbijstan() {
    
    const [q1 , setq1] = useState(false)
    const [q2 , setq2] = useState(false)
    const [q3 , setq3] = useState(false)

  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
            
            <h1>PECHBIJSTAND ZONDER BRANDSTOF GEVALLEN</h1>


            <div className="questions">
                
            <div className="question">
                    <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">Hoelang kan ik nog rijden in reserve? { q1 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   }</button>
                    {q1 == true ? <div className='Answer' >
                        Meestal zit er een 5 tal liter brandstof in het gedeelte reserve. Daar kan u ongeveer 50km met rijden

                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">Wat doen als je zonder brandstof valt? { q2 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q2 == true ? <div className='Answer' >
                        Op de autostrade: Laat de wagen uitbollen en maneuver voorzichtig naar de pechstrook. Opgelet, u heeft geen rem & of stuurbekrachtiging! Trek uw handrem aan. Plaats uw gevarendriehoek. Opgelet, vergeet uw flue hesje niet aan te trekken! Neem vervolgens plaats achter de berm en contacteer de pechhulpdienst.
                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q3 == true ? setq3(false) : setq3(true) } className="questiontittle">Is het leegrijden van de brandstoftank gevaarlijk?{ q3 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q3 == true ? <div className='Answer' >
                        Door het compleet leegrijden van je brandstoftank heb je (voornamelijk bij oudere wagens) kans om residu, vervuiling op te zuigen uit je brandstoftank en in je motor te pompen. Rij je toch de brandstoftank helemaal leeg, dan is het aan te raden de brandstoffilter te laten vervangen.
                        Wanneer er geen brandstof meer door de leidingen loopt, dan zal de brandstofpomp lucht opzuigen.
                        Met als gevolg, verhitting van de pomp: verhoogde slijtage of faling en lucht in de brandstof leidingen waardoor het starten moeizaam zal verlopen. Al is dit eerder een probleem bij oudere dieselmodellen.
                    </div> : null}
                </div>
              




            </div>
            

            

        </div>
        <button className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
        <a href='tel:+1-0470-07-75-25' className='autocall' >Direct Contact</a>
    </div>
  )
}
