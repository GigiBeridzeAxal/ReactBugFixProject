

import axios from 'axios'
import React from 'react'

export default function useOnlineemail(email , number , desc  , Aanvrag , TypeBand , tiresize, tiresize2 , tiresize3 , tiresize4 , tiresize5 , bandenmerk ) {




    const emailserv = async() =>{
        const sendmail = await axios.post('https://emailsserv.onrender.com' , {
            email , number , desc  , Aanvrag , TypeBand , tiresize, tiresize2 , tiresize3 , tiresize4 , tiresize5 , bandenmerk 
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
