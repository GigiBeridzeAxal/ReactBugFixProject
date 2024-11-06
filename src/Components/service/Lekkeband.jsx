import React, { useState } from 'react'

export default function Lekkeband() {


    const [q1 , setq1] = useState(false)
    const [q2 , setq2] = useState(false)
    const [q3 , setq3] = useState(false)
    const [q4 , setq4] = useState(false)
    const [q5 , setq5] = useState(false)
    const [q6 , setq6] = useState(false)




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
                            <li>90% van het hedendaagse wagenpark heeft geen reservewiel!</li>
                            <li>Verder rijden op een lekke band elimineert de kans op herstel!</li>
                            <li>Ook runflat banden raken beschadigd bij verder rijden met een platte band</li>
                            <li>Er bestaan autobanden die kleine gaatjes zelf dichten (bijv. type Contiseal)</li>
                            <li>bij lek rijden moeten banden op eenzelfde as gelijktijdig vervangen worden. </li>

                         </ul>


                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">Waaraan herken je een platte band? <img width={20} src="Down.png" alt="" /> </button>
                    {q2 == true ? <div className='Answer' >
                        U merkt zichtbaar drukverlies of krijgt een melding van de bandenspanningssensoren.
                    Soms ervaar je minder duidelijke symptomen zoals een afwijking naar 1 zijde, trilling in het
                    stuur, rubber geur, tikkend geluid,...


                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q3 == true ? setq3(false) : setq3(true) } className="questiontittle">Kan je doorrijden met een spijker in je band? <img width={20} src="Down.png" alt="" /> </button>
                    {q3 == true ? <div className='Answer' >
                        Er is geen drukverlies,mogelijks zit de spijker niet door de band heen. Het is belangrijk deze
        direct te laten controleren door een bandenspecialist. U kan voorzichtig verder rijden tot de
        dichtstbijzijnde bandencentrale. Beperk uw snelheid!
        Bij drukverlies raden we aan niet verder te rijden. Rijden met te lage bandendruk is gevaarlijk
        en maakt de reparatie nadien onmogelijk. Neem contact op met onze banden pechbijstand of
        monteer uw reservewiel.


                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q4 == true ? setq4(false) : setq4(true) } className="questiontittle">Waaraan herken je een platte band? <img width={20} src="Down.png" alt="" /> </button>
                    {q4 == true ? <div className='Answer' >
                        U merkt zichtbaar drukverlies of krijgt een melding van de bandenspanningssensoren.
                    Soms ervaar je minder duidelijke symptomen zoals een afwijking naar 1 zijde, trilling in het
                    stuur, rubber geur, tikkend geluid,...


                    </div> : null}
                </div>




            </div>
            

            

        </div>
        <button className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
        <a href='tel:+1-0470-07-75-25' className='autocall' >Direct Contact</a>
    </div>
  )
}
