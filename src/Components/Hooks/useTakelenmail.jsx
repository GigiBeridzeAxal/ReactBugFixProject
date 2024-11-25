

import axios from 'axios'
import React from 'react'

export default function useTakelenmail(email , number , desc , region , chooser , Aanvraag , price , afzet , ophal) {
   




    const emailserv = async() =>{
    const sendmail = await axios.post('https://emailsserv.onrender.com' , {
        email , number , desc , region , chooser , Aanvraag , price , afzet , ophal
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
