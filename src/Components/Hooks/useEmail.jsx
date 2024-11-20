

import axios from 'axios'
import React from 'react'

export default function useEmail(email , number , desc , lat , lng , region , chooser , Aanvraag , price , lat2 , lng2 , afzet , tiresize , tiresize2 , tiresize3 , tiresize4 , tiresize5 ) {
   




    const emailserv = async() =>{
    const sendmail = await axios.post('http://localhost:4000' , {
        email , number , desc , lat , lng , region , chooser , Aanvraag , price , lat2 , lng2 , afzet , tiresize , tiresize2 , tiresize3 , tiresize4 , tiresize5
    })
    if(sendmail){
        return{status:200}
    }else{
        return{status:201}
    }

    }
    emailserv()

     
    return{status:200}



}
