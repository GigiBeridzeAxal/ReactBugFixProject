

import axios from 'axios'
import React, { useState } from 'react'

export default function useWatsapp(email , number , desc , lat , lng ,region , chooser , Aanvraag , price) {




    console.log(email , number , desc , lat , lng, region , chooser )

    

  
      


    const message = encodeURIComponent(`

    Personijke gegvens

    Email: ${email}
    Mobile No: ${number}

    Vraag Details aan

    Aanvraag Type: ${Aanvraag}
    Prijs: ${price} €
    Bericht: ${desc}
    Region: ${region == "WestVla" ? "west-vlaanderen" : null}

    Locatiedetails

    Location:https://react-bug-fix-project.vercel.app/map/${lat}/${lng}
    
    `)

    window.location = `https://web.whatsapp.com/send?phone=593484636&text=${message}&app_absent=0`





    return{email}



}
