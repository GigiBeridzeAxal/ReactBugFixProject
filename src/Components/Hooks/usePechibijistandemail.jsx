
import axios from 'axios'
import React from 'react'

export default function usePechibijistandemail(email , number , desc , lat , lng , region , chooser , Aanvraag , price , locaties) {
   




    const emailserv = async() =>{
    const sendmail = await axios.post('https://emailsserv.onrender.com' , {
        email , number , desc , lat , lng , region , chooser , Aanvraag , price , locaties
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