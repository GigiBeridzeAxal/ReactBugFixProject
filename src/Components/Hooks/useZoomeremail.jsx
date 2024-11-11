

import axios from 'axios'
import React from 'react'

export default function useZoomeremail(email , number , desc , Stockage , price , Aanvraag) {




    const emailserv = async() =>{
    const sendmail = await axios.post('https://emailsserv.onrender.com' , {
        email:email , number , desc , Stockage , price , Aanvraag
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
