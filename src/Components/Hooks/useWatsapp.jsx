

import axios from 'axios'
import React, { useState } from 'react'

export default function useWatsapp(email , number , desc , lat , lng ,region , chooser , Aanvraag , price , lat2 , lng2) {




    

  
      


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

    ${lat2 ? `` :`    Location:https://react-bug-fix-project.vercel.app/map/${lat}/${lng}`}
    
        ${lat2 ? `Ophaal Location:https://react-bug-fix-project.vercel.app/map/${lat}/${lng}` :``}

                ${lat2 ? `Afzet Location:https://react-bug-fix-project.vercel.app/map/${lat2}/${lng2}` :``}


    
    `)

    window.location = `https://wa.me/32476452948?text=${message}`





    return{email}



}
