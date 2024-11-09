import React, { useState } from 'react'
import Orderpechbjistan from '../Orders/Orderlekkband'
import Onlinebandenorder from '../Orders/Onlinebandenorder'

export default function Onlinebanden() {

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
            {order == true ? null :             <h1>ONLINE BANDEN KOPEN MET MONTAGE AAN HUIS</h1>}


            {order == true ? <Onlinebandenorder></Onlinebandenorder> :   <div className="questions">
                
                <div className="question">
                        <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">{ q1 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } Waarom kan het nodig zijn uw banden te vervangen?</button>
                        {q1 == true ? <div className='Answer' >
    
                                <li>Uw banden zijn versleten</li>
                                <li>uw banden zijn beschadigd</li>
                                <li>uw banden zijn verouderd</li>
    
    
    
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q2 == true ? setq2(false) : setq2(true) } className="questiontittle">{ q2 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } De banden van uw wagen zijn versleten: </button>
                        {q2 == true ? <div className='Answer' >
                            <img  className='tire'  src="tire1.jpg" alt="" />
                            Draai het stuur van uw auto volledig naar 1 zijde zodat gemakkelijk het loopvlak van de band kan controleren.
                            In het profiel ga je op verschillende plaatsen controleblokjes zien. Wanneer uw bandenprofiel gelijk loopt met dit controle blokje, dan heeft u het wettelijke minimum van 1.6mm bereikt.
                            Het is aan te raden uw banden te vervangen bij een resterend profiel van 2.5mm.
                            <img  className='tire'  src="tire2.jpg" alt="" />
                            Uw banden kunnen onregelmatig afgesleten zijn omwille van verschillende redenen, de voornaamste reden waar u als chauffeur iets kan aan doen is als u 1 van bovenstaande slijtage patronen herkent.
                            Wanneer 1 zijde van de band afgesleten is dan is het belangrijk dat u uw voertuig laat uitlijnen.
                            Mogelijks is er een onderliggende oorzaak (defect aan ophanging)
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q3 == true ? setq3(false) : setq3(true) } className="questiontittle" >{ q3 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } De banden van uw wagen zijn beschadigd:  </button>
                        {q3 == true ? <div className='Answer' >
                            Het is belangrijk dat je regelmatig de bandendruk van de wagen controleerd, maar ook de toestand van de banden moet regelmatig gecontroleerd worden!
                            Beschadigingen kunnen veroorzaakt worden door:
    
                                <li>Natuurlijke factoren (leeftijd & slijtage)</li>
                                <li>kwaliteit van de wegen (putten, stoepraden, scherpe voorwerpen, verkeersdrempels, ...)</li>
                                <li>het klimaat (extreme temperaturen, olie, vet, sterk zonlicht, ...)</li>
                                <li>rijgedrag (snel accelereren, noodstops, ...)</li>
                                <li>incorrect gebruik van banden (zomerbanden tijdens winter, banden met te lage snelheids of gewichtsindexe  een band oppompen die lek is geweest, ...)</li>
    
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q4 == true ? setq4(false) : setq4(true) } className="questiontittle">{ q4 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } De banden van uw wagen zijn verouderd: </button>
                        {q4 == true ? <div className='Answer' >
                            Op de zijkant van de band kan je de DOT controleren. (bijv. 2520, 25ste week van 2020) Dit is de fabricage datum van de band.
                            Vanaf een band 5jaar oud is moet deze jaarlijks gecontroleerd worden.
                            Vanaf 10jaar moet deze vervangen worden, ook als er geen zichtbare beschadigingen zijn. Onderstaande foto is een typisch voorbeeld van een autoband
                            <img  className='tire'  src="tire3.jpg" alt="" />
    
                        </div> : null}
                    </div>
                    <div className="question">
                        <button onClick={() => q5 == true ? setq5(false) : setq5(true) } className="questiontittle">{ q5 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } De aankoop van banden start bij het type band dat je nodig hebt:  </button>
                        {q5 == true ? <div className='Answer' >
                            Uw banden zorgen voor veiligheid en comfort. Ze zijn dan ook het enige contact tussen uw wagen en de baan. Daarom is de keuze van uw banden belangrijk!
                            <li>minder dan 10.000km/jaar en/of met de wagen op wintersport dan raden wij aan om All-Season banden aan te schaffen.</li>
                            <li>Meer dan 10.000km/jaar en/of met de wagen op wintersport dan raden wij aan om uw voertuig te voorzien van zomerbanden en winterbanden. Die worden dan 2x per jaar gewisseld.</li>
    
                        </div> : null}
                    </div>
    
                    <div className="question">
                        <button onClick={() => q6 == true ? setq6(false) : setq6(true) } className="questiontittle">{ q6 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } Waar kan ik de maat van mijn banden vinden? </button>
                        {q6 == true ? <div className='Answer' >
                            Het is belangrijk dat u de bandenmaat steeds afleest op de zijkant van de band. De bandenmaat staat namelijk ook beschreven in je instructieboekje of het gelijkvormigheidsattest. Maar daar staan ook andere bandenmaten die niet op uw huidige configuratie gemonteerd kunnen worden!
    
                        </div> : null}
                    </div>
    
                    <div className="question">
                        <button onClick={() => q7 == true ? setq7(false) : setq7(true) } className="questiontittle"> { q7 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } Hoe lees ik de bandenmaat af?</button>
                        {q7 == true ? <div className='Answer' >
                            Op de zijkant (de wang) van de band kan je de bandenmaat aflezen. In het onderstaande voorbeeld gebruiken wij bandenmaat 205/55 R16 91W
                            <li>205: De breedte van de band uitgedrukt in mm</li>
                            <li>55: De hoogte van de band, uitgedrukt in % (in dit geval dus 55% van 205)</li>
                            <li>R16: R= Radial (wat tegenwoordig standaard is) en 16 is de velgmaat in inch</li>
                            <li>91: de laadindex: Een index die beschrijft welk gewicht de band kan dragen</li>
                            <li>W: de snelheidsindex: De index die beschrijft tot welke snelheid de band geschikt is.</li>
    
    
                        </div> : null}
                    </div>
    
                    <div className="question">
                        <button onClick={() => q8 == true ? setq8(false) : setq8(true) } className="questiontittle">{ q8 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   } Online banden kopen en thuis laten plaatsen op afspraak, hoe werkt dat? </button>
                        {q8 == true ? <div className='Answer' >
                            Bij MBC kan je je autobanden bestellen wanneer het je uitkomt. Vraag hieronder u prijsofferte aan, geef aan waar u naar op zoek bent (zomerbanden, winterbanden of All-Seasons) en ontvangt dezelfde dag uw prijsofferte. Als u akkoord bent nemen wij uw banden in bestelling (meestal 2 werkdagen) en leggen wij een afspraak vast om de banden aan huis te monteren. Na plaatsing ontvangt u uw factuur en kan u uw aankoop met bankcontact betalen.
    
    
                        </div> : null}
                    </div>    </div>
            }
          
     




         

            

        </div>
        {order == true ? null : <> <button onClick={() => setorder(true)} className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
        <a href='tel:0032476452948' className='autocall' >Direct Contact</a></> }
       
    </div>
  )
}
