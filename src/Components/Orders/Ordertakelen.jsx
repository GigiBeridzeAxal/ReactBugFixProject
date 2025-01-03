import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
import useEmail from "../Hooks/useEmail";
import useWatsapp from "../Hooks/useWatsapp";
import useTakelenmail from "../Hooks/useTakelenmail";
export default function Ordertakelen() {
     
    
    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [center2 ,setcenter2] = useState({lat:0.5353, lng:0.53515})
    const [markerpos2 , setmarkerpos2] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [locationchanged , setlocationchanged] = useState(false)
    const [locationchanged2 , setlocationchanged2] = useState(false)
    const [order , setorder] = useState(true)
    const [validationopened , setvalidationopened] = useState(false)
    const [user , setuser] = useState("Wazaa")

    const [region , setregion] = useState()
    const [chooser , setchooser] = useState()

    const [regionprice , setregionprice] = useState(0)
    const [chooserprice , setchooserprice] = useState(0)
    const [watsappmenu , setwatsappmenu] = useState(false)

    const [email , setemail] = useState()
    const [desc , setdesc] = useState()
    const [number , setnumber] = useState()
    const [locationopened , setlocationopened] = useState(1)
    
    const [country ,setcountry] = useState()
    const [countryocode , setcountrycode] = useState()
    const [emailsended , setemailsended] = useState(false)
    const [afzet , setafzet] = useState()
    const [ophal , setophal] = useState()
    
    const changewindow = () => {window.location = '/'}


    const watmenu = () => {
   

        setwatsappmenu(true)

}

const Sendwatsapp = () =>{
    const Aanvraag = "Aanvraag takeling"
    const price = chooserprice + regionprice
    

    useWatsapp(email , number , desc , region , chooser , Aanvraag , price  , afzet , ophal)


}

const Sendemail = async(e) => {

    const Aanvraag = "Aanvraag takeling"
    const price =  regionprice
    const eml =  useTakelenmail(email , number , desc , region , chooser , Aanvraag , price  , afzet , ophal)

    if(eml.status == 200){
        setemailsended(true)
    }



}

    const MyLocat = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
  
            setmarkerpos({ lat , lng})
            setcenter({lat, lng})
            setlocationchanged(true)
        })
    }


    const MyLocat2 = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude

            setmarkerpos2({ lat , lng})
            setcenter2({lat, lng})
            setlocationchanged2(true)
        })
    }

    return(
   validationopened == true ? <>
   
   <form onSubmit={(e) => e.preventDefault() | e.nativeEvent.submitter.className == "Emailsubmit" ? Sendemail() : null | e.nativeEvent.submitter.className == "Whatsappsubmit" ? Sendwatsapp() : null } className="formval"  >

     <label className="label" >Telefoon Nummer</label>
     <div className="phone">

            <div className="phonevalues">

            <input required maxLength={10} minLength={9} className="phoneinput" type="text" />
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
        <input required type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
     </div>

     </div>


     <button onSubmit={(e) => ("Whatsaap")} className="Whatsappsubmit" >Uw aanvraag doorsturen per Whatsapp</button>
     <button className="Emailsubmit" >Uw aanvraag doorsturen per mail</button>


   </form>

   </> :
    <>
    
    
    
    
    {order == true  ? null: <div className="locationframe" >
                Waar is uw voertuig?
                {locationopened == 1 ?locationchanged == true  ? <button onClick={() =>setlocationopened(2) } >Doorgaan</button> : <button onClick={() => MyLocat()} >Zoek mij</button> : null
                }
                {locationopened == 2 ?locationchanged2 == true  ? <button onClick={() => setorder(true)} >Doorgaan</button> : <button onClick={() => MyLocat2()} >Zoek mij</button> : null
                }

    
    
    
                </div>}
               
                {order == true  ?
                <>
    
                <div style={{width:'100%'}} >
                  

                  
                    {watsappmenu == true ?  <div className="watsappmenu">
        <div className="watframe">
            <img src="Warning.png" alt="" />
        <div className="watmenutittle">Je Wordt doorgestuurd naar WhatsApp</div>
        <div className="watdesc">Ja , er wordt een nieuw WhatsApp-tabblad geopend en de volgende pagina wordt hier geopend.</div>

        <div className="watbtns">
            <button className="yesbtn"  onClick={() => Sendwatsapp()} >Yes</button>
            <button className="cancelbtn" onClick={() => setwatsappmenu(false)} >Cancel</button>
        </div>
        </div>
       


     </div>
 : null}
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
                   
                        
                    </div>
                    <form onSubmit={(e) => e.preventDefault() | e.nativeEvent.submitter.className == "Emailsubmit" ? Sendemail() : null | e.nativeEvent.submitter.className == "Whatsappsubmit" ? Sendwatsapp() : null } className="formval"  >
<label className="label" >Telefoon Nummer</label>
<div className="phone">

       <div className="phonevalues">

       <input onChange={(e) => setnumber(e.target.value)} required maxLength={10} minLength={9} className="phoneinput" type="text" />
       </div>


</div>
<label className="label" >Email Adres</label>
<input onChange={(e) => setemail(e.target.value)} className="email" required  type="email" />

<label className="label" >Afzet Locatie</label>
<input onChange={(e) => setafzet(e.target.value)} className="email" required  type="text" />

<label className="label" >ophaal Locatie</label>
<input onChange={(e) => setophal(e.target.value)} className="email" required  type="text" />



<label className="label" >Bericht</label>
<textarea onChange={(e) => setdesc(e.target.value)} className="bericht" required name="" id=""></textarea>

<div className="terms" >
< h1 className="vorwarden">Voorwaarden</h1>
<p className="acepter" >Accepteer het privacybeleid voordat u een verzoek indient.</p>

<div className="termcheckbox">
   <input required type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
</div>

</div>


<button  className="Whatsappsubmit" >Uw aanvraag doorsturen per Whatsapp</button>
<button  className="Emailsubmit" >Uw aanvraag doorsturen per mail</button>
<br />
</form>


                
    
       
                </>
                
                :  <div className="map" >


                {locationopened == 1 ? <> Selecteer de Ophaal locatie <APIProvider  apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
        ">
         <Map
              defaultZoom={10}
              center={markerpos}
              >
                
                <Marker  draggable onDragEnd={(e) => setmarkerpos(e.latLng.toJSON() ) | setlocationchanged(true) } position={markerpos} ></Marker>
        
        </Map>
        
        </APIProvider>
                
                
                </>  : <>                     Selecteer de Afzet locatie
        <APIProvider apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
        ">
         <Map
              defaultZoom={10}
              center={markerpos2}
              >
                
                <Marker  draggable onDragEnd={(e) => setmarkerpos2(e.latLng.toJSON()) | setlocationchanged2(true)  } position={markerpos2} ></Marker>
        
        </Map>
        </APIProvider> 
        </>  }
             
               
        </div>
         }
    
              
              
    </>
    
        
    
    
     
    
      )
 
}
