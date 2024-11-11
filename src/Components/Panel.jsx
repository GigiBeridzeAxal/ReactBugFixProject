import React from 'react'
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




<Services></Services>


 




</div>


</div>} 


  
    
 
    </>

   
  )
}
