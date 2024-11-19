

import axios from 'axios'
import React from 'react'

export default function useZoomeremail(email , number , desc , Stockage , price , Aanvraag , from1 , to1, date1 , from2 , to2, date2 , from3 , to3, date3) {





    const emailserv = async() =>{
    const sendmail = await axios.post('https://emailsserv.onrender.com' , {
        email , number , desc , Stockage , price , Aanvraag , from1 , to1, date1 , from2 , to2, date2 , from3 , to3, date3
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
