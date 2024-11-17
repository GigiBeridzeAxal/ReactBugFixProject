import React, { useEffect, useState } from 'react'
import Panel from './Panel'

export default function Main() {
  const [notopened , setnotopened] = useState(false)

  useEffect(() => {
 
    const date = new Date()
    const day = date.getDay()
    const hours = date.setHours(date.getHours())
    const houreight = date.setHours(8)
    const houreighteen = date.setHours(18)
    const hourstwent = date.setHours(22)
    const nowhours = date.setHours(date.getHours())



    if(day >= 1){

        if(day <= 5){


            if(hours >= houreight && hours < hourstwent){

                setnotopened(false)

        }else{
          setnotopened(true)
        }
        if(hours >= houreight && hours < hourstwent){


            setnotopened(false)

    }else{
      setnotopened(true)
    }
    
        }
    }
    if(day <= 0){
      if(hours >= houreight && hours< hourstwent ){
        setnotopened(false)
      }else{
        setnotopened(true)
      }
        if(day >= 6){


          if(hours >= houreight && hours< hourstwent ){
            setnotopened(false)
          }else{
            setnotopened(true)
          }
        }

    }
    

},[])

  return (


    <div className='Main' >
    <img className='BG'  src="bg.jpeg" alt="" />
   
    {notopened == true ? <> <div className="notif">
      <div className="notifframe">
        <div className="notiflogo"><img src="Mark.png" alt="" /></div>
        <div className="notiftitlte">Wij zijn geopend van 08.00 tot 22.00, u kan uw interventie aanvragen, wij nemen z.s.m contact op om uw interventie te bevestigen</div>
        <button onClick={() => setnotopened(false)} >OK</button>
      </div>
    </div></> : null}
    <Panel></Panel>

    </div>

  )
}
