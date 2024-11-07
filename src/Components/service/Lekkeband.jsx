import React, { useState } from 'react'

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





  return (
    <div className="service">
        <img width={250} src="LOGO.png" alt="" />
        <div className="serviceframe">
            
            <h1>PECHBIJSTAND LEKKE BAND</h1>


            <div className="questions">
                
            <div className="question">
                    <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">Platte band auto weetjes: { q1 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   }</button>
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
                    <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">Waaraan herken je een platte band? { q2 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q2 == true ? <div className='Answer' >
                        U merkt zichtbaar drukverlies of krijgt een melding van de bandenspanningssensoren.
                    Soms ervaar je minder duidelijke symptomen zoals een afwijking naar 1 zijde, trilling in het
                    stuur, rubber geur, tikkend geluid,...


                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q3 == true ? setq3(false) : setq3(true) } className="questiontittle">Kan je doorrijden met een spijker in je band? { q3 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
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
                    <button onClick={() => q4 == true ? setq4(false) : setq4(true) } className="questiontittle">Een lekke autoband, het reservewiel monteren!{ q4 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q4 == true ? <div className='Answer' >
                        <ul>
                            <li>Controleer dat uw wagen veilig staat, trek te handrem aan</li>
                            <li>Los de wielbouten 1 omwenteling</li>
                            <li>Krik de wagen op op de voorziene krikpunten (zie instructieboekje)</li>
                            <li>Vervang de lekke band van uw wagen door het reservewiel</li>
                            <li>Draai de wielbouten tegenaan, laat de wagen zakken & trek de wielbouten vervolgens zo hard mogelijk aan.</li>


                         </ul>

                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q5 == true ? setq5(false) : setq5(true) } className="questiontittle">Platte band auto & geen reservewiel te bespeuren!{ q5 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q5 == true ? <div className='Answer' >
                        U heeft een lekke band en merkt op dat het reservewiel ontbreekt! Dit is geen vergissing!
                        We leven in een wereld waar constructeurs uitgedaagd worden de lat steeds hoger te leggen.
                Omwille van gewichts en ruimte besparing werd het reservewiel uit de auto geweerd.
                In plaats daarvan werd een noodkit voorzien die bestaat uit een kleine 12v compressor en een vulling lijm.
                In de praktijk merken we op dat dit geen waardig alternatief is voor het volwaardig reservewiel.
                Sommige constructeurs voorzien het reservewiel als optie!
                Mobiele Bandencentrale heeft geen reservewiel nodig om jou te helpen! Wij herstellen of vervangen uw band ter plaatse!

                    </div> : null}
                </div>

                <div className="question">
                    <button onClick={() => q6 == true ? setq6(false) : setq6(true) } className="questiontittle">Autoband reparatie{ q6 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   }</button>
                    {q6 == true ? <div className='Answer' >
                        Een auto band reparatie is kosten besparend! Na de banden herstelling is uw band even goed!
                        Er zijn verschillende redenen waarom autobanden druk kunnen verliezen:
                        <li>Een scherp voorwerp in de band (Bijv. een nagelin de band, glas in de band, ...)</li>
                            <li>Een rubber ventiel dat verstorven is</li>
                            <li>Een bandenspanningssensor die lekt</li>
                            <li>Een scheur in de band (door bijv. Een klapband, een put of een stoeprand geraakt)</li>
                            <li>Een vorige banden reparatie die slecht werd uitgevoerd </li>
                            Helaas kunnen niet alle bovenstaande oorzaken hersteld worden of kan er gevolgschade ontstaan zijn!
                            Ook dan biedt Mobiele Bandencentrale de oplossing door uw banden ter plaatse te vervangen!

                    </div> : null}
                </div>

                <div className="question">
                    <button onClick={() => q7 == true ? setq7(false) : setq7(true) } className="questiontittle">Voorwaarden autoband reparatie{ q7 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q7 == true ? <div className='Answer' >
                        Allereerst controleren wij de buitenzijde en zoeken wij de oorzaak,
                        vervolgens controleren we de binnenzijde, Is er gevolgschade?
                        <li>Uw band mag NIET versleten zijn.</li>
                        <li>Er mag GEEN gevolgschade zijn ( !!! Rij NIET verder op een lekke band!!! )</li>
                            <li>Uw band mag NIET gerepareerd worden op de hiel of zijwand (of 5cm daarvan) </li>
                            <li>Het voorwerp mag NIET schuin in uw band binnendrongen zijn</li>
                            <li>het gat mag niet groter zijn dan 3mm</li>
                           

                    </div> : null}
                </div>

                <div className="question">
                    <button onClick={() => q8 == true ? setq8(false) : setq8(true) } className="questiontittle">Hoe verloopt onze pechverhelping? { q8 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q8 == true ? <div className='Answer' >
                        Voor bandenpech verhelping ter plaatse kan u ons telefonisch contacteren.
                        (Ook via Whatsapp, wat handig is om ons enkele foto's of uw realtime locatie door te sturen.)
                        Wij stellen u enkele vragen zoals
                        <li>Wat heeft u opgemerkt?</li>
                        <li>Heeft u een vermoeden wat de oorzaak van uw lekke band is?</li>
                            <li>Was u aan het rijden toen u opmerkte dat de autoband plat was?</li>
                            <li>Zit de platte band vooraan of achteraan?</li>
                            <li>Welke is de bandenmaat van uw wagen?</li>
                           


                    </div> : null}
                </div>
                <div className="question">
                    <button onClick={() => q9 == true ? setq9(false) : setq9(true) } className="questiontittle">Een platte band? Autoband repareren? Aan welke voertuigen werkt de Mobiele Bandencentrale?{ q9 == true ?<img width={20} src="Up.png" alt="" /> : <img width={20} src="Down.png" alt="" />   } </button>
                    {q9 == true ? <div className='Answer' >
                        platte band? Wij herstellen en vervangen banden van ieder type personenvoertuig (oldtimers, sportwagens, sedans, ...) maar ook lichte vracht (bestelwagens, aanhangwagens, terreinwagens), zelfs uw Mobile Home!


                    </div> : null}
                </div>





            </div>
            

            

        </div>
        <button className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
        <a href='tel:+1-0470-07-75-25' className='autocall' >Direct Contact</a>
    </div>
  )
}
