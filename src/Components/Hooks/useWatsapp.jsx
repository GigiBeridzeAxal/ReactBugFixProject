

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
    ${price ? `Prijs: ${price} €` : ``}

    Bericht: ${desc}
    ${region ? `Region: ${region == "WestVla" ? "west-vlaanderen" : ''} ${region == "OostVla" ? "OOST-VLAANDEREN" : ''} ${region == "Antwerpen" ? "ANTWERPEN" : ''}` : ''}


    Locatiedetails

    ${lat ?`    Location:https://react-bug-fix-project.vercel.app/map/${lat}/${lng}` :``}


    
    `)

    window.location = `https://web.whatsapp.com/send?phone=32470077525‬&text=${message}&app_absent=0`





    return{email}



}
