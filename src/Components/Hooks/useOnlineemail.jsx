

import axios from 'axios'
import React from 'react'

export default function useOnlineemail(email , number , desc  , Aanvrag , TypeBand) {




    const emailserv = async() =>{
        const sendmail = await axios.post('http://localhost:4000/' , {
        email , number , desc  , Aanvrag , TypeBand
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
