
import axios from 'axios'
import React, { useState } from 'react'

export default function useLekkebandwatsapp(email , number , desc , lat , lng , region , chooser , Aanvraag , price , tiresize , tiresize2 , tiresize3 , tiresize4 , tiresize5 , locaties) {



    

  
      


    const message = encodeURIComponent(`

    Contact gegevens

    Email: ${email}
    Mobile No: ${number}

    Details

    Aanvraag Type: ${Aanvraag}
    ${price ? `Prijs: ${price} €` : ``}

    Bericht: ${desc}
    ${region ? `Region: ${region == "WestVla" ? "west-vlaanderen" : ''} ${region == "OostVla" ? "OOST-VLAANDEREN" : ''} ${region == "Antwerpen" ? "ANTWERPEN" : ''}` : ''}
    ${tiresize ? `Bandenmaat:${tiresize} ${tiresize2} ${tiresize3} ${tiresize4} ${tiresize5} ` : ''}
    ${chooser == "velvebroken" ? `KIES INDIEN VAN TOEPASSING:Ventiel afgebroken` : `${chooser == "MEERDERE" ? " KIES INDIEN VAN TOEPASSING:MEERDERE LEKKE BANDEN" : " KIES INDIEN VAN TOEPASSING:ZICHTBAAR SCHADE OF PLAT VERDER GERDEN" }`}
    ${locaties ? `Locatie:${locaties}` : ''}
    
    Locatie


    ${!lat ? `` :`    Location:https://maps.google.com/?q=${lat},${lng}`}
    
 


    
    `)

    window.location = `https://wa.me/32476452948?text=${message}`





    return{email}



}
