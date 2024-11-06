import React from 'react'
import {Router , Routes , Route , useNavigate , Link , useParams} from 'react-router-dom'
import Services from './Services'
import Lekkeband from './service/Lekkeband'

export default function Panel() {
  const {id} = useParams()

  console.log(id)

  
   




  return (


    <>
    {id ?  <div className='panel' >

{id ?
id == 1 ? <Lekkeband></Lekkeband> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />




<Services></Services>


 




</div>
}

</div> :   
     <div className='homepanel' >

{id ?
id == 1 ? <Lekkeband></Lekkeband> :null

: <div className="homepanelframe">
<img width={250} src="LOGO.png" alt="" />




<Services></Services>


 




</div>
}

</div>}
    
 
    </>

   
  )
}
