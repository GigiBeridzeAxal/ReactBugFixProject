
import axios from 'axios'
import React, { useState } from 'react'

export default function usePechibijistandewatsapp(email , number , desc , lat , lng , region , chooser , Aanvraag , price , locaties) {



    

  
      


    const message = encodeURIComponent(`

    Contact gegevens

    Email: ${email}
    Mobile No: ${number}

    Details

    Aanvraag Type: ${Aanvraag}
    ${price ? `Prijs: ${price} €` : ``}

    Bericht: ${desc}
    ${region ? `Region: ${region == "WestVla" ? "west-vlaanderen" : ''} ${region == "OostVla" ? "OOST-VLAANDEREN" : ''} ${region == "Antwerpen" ? "ANTWERPEN" : ''}` : ''}
 
    ${locaties ? `Locatie:${locaties}` : ''}
    
    Locatie


    ${!lat ? `` :`    Location:https://maps.google.com/?q=${lat},${lng}`}
    
 


    
    `)

    window.location = `https://wa.me/32476452948?text=${message}`





    return{email}



}
