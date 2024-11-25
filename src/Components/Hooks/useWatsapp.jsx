

import axios from 'axios'
import React, { useState } from 'react'

export default function useWatsapp(email , number , desc , lat , lng ,region , chooser , Aanvraag , price , lat2 , lng2 , afzet , ophal) {




    

  
      


    const message = encodeURIComponent(`

    Contact gegevens

    Email: ${email}
    Mobile No: ${number}

    Details

    Aanvraag Type: ${Aanvraag}
    ${price ? `Prijs: ${price} €` : ``}

    Bericht: ${desc}
    ${region ? `Region: ${region == "WestVla" ? "west-vlaanderen" : ''} ${region == "OostVla" ? "OOST-VLAANDEREN" : ''} ${region == "Antwerpen" ? "ANTWERPEN" : ''}` : ''}

    
    Locatie

    ${afzet ? `Afzet Locatie: ${afzet}` : ''}
    ${ophal ? `Ophaal Locatie: ${ophal}` : ''}



    
    `)

    window.location = `https://wa.me/32476452948?text=${message}`





    return{email}



}
