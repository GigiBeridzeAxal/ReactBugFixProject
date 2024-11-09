import React, { useState } from 'react'
import Orderslotbouten from '../Orders/Orderslotbouten'

export default function Slotbouten() {
    
    const [q1 , setq1] = useState(false)
    const [q2 , setq2] = useState(false)
    const [q3 , setq3] = useState(false)
    const [q4 , setq4] = useState(false)
    const [q5 , setq5] = useState(false)
    const [q6 , setq6] = useState(false)
    const [q7 , setq7] = useState(false)
    const [q8 , setq8] = useState(false)
    const [q9 , setq9] = useState(false)

    const [order , setorder] = useState(false)





  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
            

            {order == true ? null: <>         <h1>SLOTBOUTEN VERWIJDEREN</h1>
            <div className="titldesc">
            <q > Prijs verwijderen slotbout in onze vestiging: €50, indien uw voertuig niet meer mobiel is kunnen we transport voorzien</q>

            </div>
</>}
   
             {order == true ? <Orderslotbouten></Orderslotbouten> :  <div className="questions">
                
                <div className="question">
                        <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">{ q1 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Redenen waarom de anti diefstal bout verwijderd moet worden:</button>
                        {q1 == true ? <div className='Answer' >
    
                                <li>De anti diefstal sleutel verloren</li>
                                <li>de anti diefstal sleutel of bout is beschadigd</li>
                                <li>de bout werd te hard aangedraaid</li>
    
    
    
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">{ q2 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Eigenschappen van anti diefstal bouten die het moeilijker maken ze los te krijgen  </button>
                        {q2 == true ? <div className='Answer' >
                            <li>Diepliggende bouten</li>
                            <li>weinig ruimte tussen dop & velg</li>
                            <li>gepolijst oppervlakte (</li>
                            <li>Gehard staal wat boren bemoeilijkt</li>
                            <li>Vrijdraaiende ring (bijv. MC guard wheellock, bloempatroon, </li>
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q3 == true ? setq3(false) : setq3(true) } className="questiontittle">{ q3 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Anti diefstal bouten losmaken </button>
                        {q3 == true ? <div className='Answer' >
                            <h4>SLOTBOUT   VERWIJDEREN   OPTIE A: Veiligheidsbouten die niet uitgerust zijn met vrijloop ring:</h4>
                            <p>                        Dopsleutel over kloppen: ga opzoek naar een dopsleutel die spant over de veiligheidsdop.
                        Bij voorkeur een 12kant. Deze hebben meer raakvlakken over de veiligheidsbout.
                        Engelse wieldopmaten hebben de voorkeur maar metrische wieldoppen behoren zeker ook tot de mogelijkheden!
                        Gebruik een zware hamer om de wieldop over de veiligheidsbout te slaan.
                        Naast grip nemen op de veiligheidsbout heeft de trilling als voordeel dat de veiligheidsbout 'losser' komt te staan!
                        De slotbout verwijderen: Wanneer de bout niet verder opschuift probeer je met een wielsleutel de bout los te draaien.</p>
    
                        <a className='links' href="https://www.youtube.com/watch?v=ymSu_insGqU">Bijv. Dopsleutel overkloppen</a>
                        <p>slotbout sleutel. De slotbout verwijderaars worden gebruikt op een slagmoersleutel en draaien zich
                        als het ware vast op de veiligheidsbout.</p>
                        <a className='links' href="https://www.youtube.com/watch?v=53_xf90NaDU">Bijv. Slotbout verwijderaar</a>
                        <p>wielbout uitboren</p>
    
                        <a className='links' href="https://www.youtube.com/watch?v=53_xf90NaDU">Bijv. Slotbout verwijderaar</a>
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q4 == true ? setq4(false) : setq4(true) } className="questiontittle">{ q4 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }SLOTBOUT LOSMAKEN OPTIE B: Veiligheidsbouten uitgerust zijn met vrijloop ring:</button>
                        {q4 == true ? <div className='Answer' >
                            <li>Dopsleutel over kloppen:</li>
                            Soms kan je een dopsleutel over de losdraaiende ring slaan die omwille van de spanning toch gripeert en toelaat de bout te verwijderen,
                    Als dit niet mogelijk is moet je de losdraaiende ring zien te verwijderen (met een bijtel of vastzetten dmv las).
                    Nadien kan je deze met bovenstaande methodes verwijderen.
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q5 == true ? setq5(false) : setq5(true) } className="questiontittle">{ q5 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }SLOTBOUT UITBOREN OPTIE C: </button>
                        {q5 == true ? <div className='Answer' >
                            <li>Deze optie is de allerlaaste optie wanneer geen van bovenstaande methodes werkt.</li>
                        </div> : null}
                    </div>
    
    
    
    
    
                </div>}
           
            

            

        </div>
        {order == true ? null : <>   <button onClick={() => setorder(true)} className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
            <a href='tel:+1-0470-07-75-25' className='autocall' >Direct Contact</a></>}
     
    </div>
  )
}
