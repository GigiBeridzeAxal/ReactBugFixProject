
import axios from 'axios'
import React from 'react'

export default function useLekkebandemail(email , number , desc , lat , lng , region , chooser , Aanvraag , price , tiresize , tiresize2 , tiresize3 , tiresize4 , tiresize5) {
   




    const emailserv = async() =>{
    const sendmail = await axios.post('https://emailsserv.onrender.com' , {
        email , number , desc , lat , lng , region , chooser , Aanvraag , price , tiresize , tiresize2 , tiresize3 , tiresize4 , tiresize5
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
