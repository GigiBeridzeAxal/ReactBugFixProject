import React, { useEffect, useState } from 'react'
import {Router , Routes , Route , useNavigate , Link , useParams} from 'react-router-dom'
import Services from './Services'
import Lekkeband from './service/Lekkeband'
import Zommerwinter from './service/Zommerwinter'
import Onlinebanden from './service/Onlinebanden'
import Pechbijstan from './service/Pechbijstan'
import Plattebatterij from './service/Plattebatterij'
import Slotbouten from './service/Slotbouten'
import B2b from './service/B2b'
import Takelen from './service/Takelen'

export default function Panel() {
  const {id} = useParams()

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


    <>
    {id == 1 ?  <div className='panel' >

{id ?
id == 1 ? <Lekkeband></Lekkeband> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}

</div> : null  }


 
{id == 2 ?  <div className='panel' >

{id ?
id == 2 ? <Zommerwinter></Zommerwinter> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }

 
{id == 3 ?  <div className='panel' >

{id ?
id == 3 ? <Onlinebanden></Onlinebanden> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }

{id == 4 ?  <div className='panel' >

{id ?
id == 4 ? <Pechbijstan></Pechbijstan> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }

{id == 5 ?  <div className='panel' >

{id ?
id == 5 ? <Plattebatterij></Plattebatterij> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }

{id == 6 ?  <div className='panel' >

{id ?
id == 6 ? <Slotbouten></Slotbouten> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }

{id == 8 ?  <div className='panel' >

{id ?
id == 8 ? <B2b></B2b> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }

{id == 7 ?  <div className='panel' >

{id ?
id == 7 ? <Takelen></Takelen> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />






 




</div>
}



</div> : null  }



{id ? null:    <div className='homepanel' >

 <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />


{notopened == true ? <> <div className="notif">
      <div className="notifframe">
        <div className="notiflogo"><img src="Mark.png" alt="" /></div>
        <div className="notiftitlte">Wij zijn geopend van 08.00 tot 22.00, u kan uw interventie aanvragen, wij nemen z.s.m contact op om uw interventie te bevestigen</div>
        <button onClick={() => setnotopened(false)} >OK</button>
      </div>
    </div></> : null}
    

<Services></Services>


 




</div>


</div>} 


  
    
 
    </>

   
  )
}
