import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
import useEmail from "../Hooks/useEmail";
export default function Orderslotbouten() {
    
    
    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [locationchanged , setlocationchanged] = useState(false)
    const [order , setorder] = useState(false)
    const [validationopened , setvalidationopened] = useState(false)

    const [region , setregion] = useState()
    const [chooser , setchooser] = useState()

    const [regionprice , setregionprice] = useState(0)
    const [chooserprice , setchooserprice] = useState(0)

    const [email , setemail] = useState()
    const [desc , setdesc] = useState()
    const [number , setnumber] = useState()
    const [emailsended , setemailsended] = useState(false)
    const [country ,setcountry] = useState()
    const [countryocode , setcountrycode] = useState()

    const changewindow = () => {window.location = '/'}
    const Sendemail = async(e) => {
      e.preventDefault();

      const Aanvraag = "SLOTBOUTEN VERWIJDEREN"
      const price =  regionprice
      const eml =  useEmail(email , number , desc , markerpos.lat , markerpos.lng , region , chooser , Aanvraag , price)
      console.log(eml.status)
      
      if(eml.status == 200){
          setemailsended(true)
      }
  
  
  
  }


    const MyLocat = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            console.log(lat , lng)
            setmarkerpos({ lat , lng})
            setcenter({lat, lng})
            setlocationchanged(true)
        })
    }

    return(
   validationopened == true ? <>
   
   <form className="formval"  >

     <label className="label" >Telefoon Nummer</label>
     <div className="phone">

            <div className="phonevalues">

            <input required maxLength={9} minLength={9} className="phoneinput" type="text" />
            </div>


     </div>
     <label className="label" >Email Adres</label>
     <input className="email" required  type="email" />

     <label className="label" >Bericht</label>
     <textarea className="bericht" required name="" id=""></textarea>

     <div className="terms" >
     < h1 className="vorwarden">Voorwaarden</h1>
     <p className="acepter" >Accepteer het privacybeleid voordat u een verzoek indient.</p>

     <div className="termcheckbox">
        <input type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
     </div>

     </div>


     <button className="Whatsappsubmit" >Uw aanvraag doorsturen per Whatsapp</button>
     <button className="Emailsubmit" >Uw aanvraag doorsturen per mail</button>


   </form>

   </> :
    <>
    
    
    
  
               

                <>
    
                <div>
               
           
                   
                   
                        
                    </div>
                    <form onSubmit={(e) => Sendemail(e)} className="formval"  >

<label className="label" >Telefoon Nummer</label>
<div className="phone">
</div>
       <div className="phonevalues">
       <input onChange={(e) => setnumber(e.target.value)} required maxLength={9} minLength={9} className="phoneinput" type="text" />


</div>
<label className="label" >Email Adres</label>
<input onChange={(e) => setemail(e.target.value)} className="email" required  type="email" />

<label className="label" >Bericht</label>
<textarea onChange={(e) => setdesc(e.target.value)} className="bericht" required name="" id=""></textarea>

<div className="terms" >
< h1 className="vorwarden">Voorwaarden</h1>
<p className="acepter" >Accepteer het privacybeleid voordat u een verzoek indient.</p>

<div className="termcheckbox">
   <input type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
</div>

</div>
{emailsended == true ?  <div className="watsappmenu">
        <div className="watframe">
            <img src="Warning.png" alt="" />
        <div className="watmenutittle">Een bericht succesvol verzonden</div>
        <div className="watdesc">Bedankt voor het gebruik van onze service</div>

        <div className="watbtns">
            <button className="yesbtn" onClick={() => setemailsended(false) | changewindow()} >Ok!</button>
        </div>
        </div>
       


     </div>
 : null}


<button className="Emailsubmit" >Uw aanvraag doorsturen per mail</button>
<br />


</form>

                
    
                
                </>
                
               
    
              
    
    </>
    
        
    
    
     
    
      )
 
}
