import React, { useState } from 'react'
import Orderb2b from '../Orders/Orderb2b'

export default function B2b() {

    
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
            
            {order == true ? null:            <h1>PECHBIJSTAND LEKKE BAND</h1> }


            {order == true ? <Orderb2b></Orderb2b>:                 <div className="questions">
                
                <div className="question">
                        <button onClick={() => q1 == true ? setq1(false) : setq1(true) } className="questiontittle">{ q1 == true ?<div className='minus' >-   </div> : <div className='plus' >+</div>   }Platte band auto weetjes: </button>
                        {q1 == true ? <div className='Answer' >
                           De eenmanszaak Mobiele Bandencentrale werd door Sander Van Seghbroeck opgericht in 2012. Het was voor Sander duidelijk dat er een ontbrekende link was (en veel ruimte voor verbetering) tussen het oplopen van een platte band en een bandenreparatie of vervanging bij de traditionele bandencentrale. 
                           Zo profileerde Mbc zich in het begin als banden pechbijstand verlener. Toen Mobiele Bandencentrale in 2014 de opportuniteit kreeg om voor 2 concessiehouders in het Gentse de zomer-winter bandenwissel en stockage te verzorgen, grepen wij deze kans met beide handen.
                           Zo werd in 2016 de vennootschap, Mobiele Bandencentrale BV opgericht.
                           In 2017 kwam daar een wagenparkcontrole verspreidt over Vlaanderen bij en in 2018 een exclusiviteitscontract met een automobiel constructeur alwaar wij tot op heden de nieuwe wagens van Allseason banden voorzien & op de wagens van het personeel zomer-winterbanden monteren.
                           Toen in 2020 omwille van de gekende Corona problematiek de productie op een laag pitje draaide kon MBC zich verder ontplooien in zijn pechbijstand verlening voor particulieren.
                            Dit leidde tot de uitbreiden van onze diensten (takelen).
                            In 2023 konden we rekenen op de zomer-winter banden & wielenwissel van een autosupermarkt & het preventief wisselen van versleten banden die gestockeerd werden door een concessie in het Brusselse. Daarnaast kregen we ook de kans om voor een gekende pechbijstandsverlener all-season banden te monteren op haar vervangwagens.
                            Eind 2023 kregen we een nieuwe uitdaging. Het stockeren en wisselen van wielen voor een fabrikant van elektrische voertuigen.
                             Het staat als een paal boven water dat deze bedrijven/multinationals niet zomaar voor onze diensten hebben gekozen. Men opteerden voor ons omdat wij telkens voor iedere situatie een andere aanpak hadden die aangepast was op de noden van het vraagstuk. 
                             Onze klanten weten dat wij voor hen door het vuur gaan, meedenken naar oplossingen en slechts tevreden zijn als de service uitmuntend was.
                             Laat via onderstaande knop een bericht na, u hoort dezelfde dag nog van ons.
    
    
                        </div> : null}
                    </div>
                  
    
    
    
    
                </div>
                       }


            

        </div>
        {order == true ? null: <>        <button onClick={() => setorder(true)} className='button1' >prijsofferte/interventie aanvragen in 2 stappen</button>
          <a href='tel:0032476452948' className='autocall' >Direct Contact</a></>}

    </div>
  )
}
