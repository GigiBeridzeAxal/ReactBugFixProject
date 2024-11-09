

import axios from 'axios'
import React from 'react'

export default function useEmail(email , number , bericht , lat , lng) {


    console.log(email , number , bericht , lat , lng)

    const emailserv = async() =>{
    const sendmail = await axios.post('https://emailsserv.onrender.com' , {
        email:email , number , bericht , lat , lng
    })

    }
    emailserv()



    return{email}



}
