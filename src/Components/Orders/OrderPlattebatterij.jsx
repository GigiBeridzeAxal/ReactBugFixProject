import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
import useEmail from "../Hooks/useEmail";



import useWatsapp from "../Hooks/useWatsapp";
export default function OrderPlattebatterij() {
    
    
    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [locationchanged , setlocationchanged] = useState(false)
    const [order , setorder] = useState(false)
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
    
    const [country ,setcountry] = useState()
    const [countryocode , setcountrycode] = useState()
    const [emailsended , setemailsended] = useState(false)
    const [region2price , setregion2price] = useState(145)
    const [regionerror , setregionerror] = useState(false)
    useEffect(() => {
 
        const date = new Date()
        const day = date.getDay()
        const hours = date.getHours()
        const houreight = date.setHours(8)
        const houreighteen = date.setHours(18)
        const nowhours = date.setHours(date.getHours())



        if(day >= 1){
            if(day <= 5){

                if(hours >= 8 && hours < 18){

                        setregion2price(95)

                }
            }
        }
        if(day <= 0){
            if(day >= 6){
                setregion2price(145)
            }

        }
        

    },[])
    const changewindow = () => {window.location = '/'}


    const watmenu = () => {
   

        setwatsappmenu(true)

}

const Sendwatsapp = () =>{


    if(regionprice == 0){

    }else{
        const Send = () => {

    const Aanvraag = "PECHBIJSTAND PLATTE BATTERIJL"
    const price = chooserprice + regionprice
    

    useWatsapp(email , number , desc , markerpos.lat , markerpos.lng , region , chooser , Aanvraag , price)

        }
        Send()
    }



}

const Sendemail = async(e) => {

    if(regionprice == 0){

    }else{

        const Send = () => {
 const Aanvraag = "PECHBIJSTAND PLATTE BATTERIJL"
    const price =  regionprice
    const eml =  useEmail(email , number , desc , markerpos.lat , markerpos.lng , region , chooser , Aanvraag , price)

    if(eml.status == 200){
        setemailsended(true)
    }
        }
        Send()

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
    
    
    
    
    {order == true  ? null: <div className="locationframe" >
                Waar is uw voertuig?
    
                {locationchanged == true  ? <button onClick={() => setorder(true)} >Doorgaan</button>:<button onClick={() => MyLocat()} >Zoek mij</button>}
    
    
    
                </div>}
               
                {order == true  ?
                <>
    
                <div>
                    <div className="regions">
                        <div className="regiontittle">KIES UW REGIO</div>
                        <div className="regionbtn">
                            {region == "WestVla" ?<button className="choosedbutton" > <img width={120} src="WestVla.webp" alt="" /></button> :<button onClick={() => setregion("WestVla") | setregionprice(region2price + 50) } className="notchoosedbtn" > <img width={120} src="WestVla.webp" alt="" /></button>}
                            {region == "OostVla" ?<button className="choosedbutton" > <img width={120} src="OostVla.webp" alt="" /></button> :<button onClick={() => setregion("OostVla") | setregionprice(region2price) }  className="notchoosedbtn" > <img width={120} src="OostVla.webp" alt="" /></button>}
                            {region == "Antwerpen" ?<button className="choosedbutton" > <img width={120} src="Antwerpen.webp" alt="" /></button> :<button onClick={() => setregion("Antwerpen") | setregionprice(region2price + 50) } className="notchoosedbtn" > <img width={120} src="Antwerpen.webp" alt="" /></button>}
    
                        </div>
                        {regionerror == true ? <div className="error">Selecteer een van de</div> : null}
                        <div className="price">
                        <div className="totalprice"> € {regionprice + chooserprice} </div>
                        <p>(*) Prijs excl. Brandstof</p>
                    </div>
                    </div>
                  
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
                    <form onSubmit={(e) => e.preventDefault() | e.nativeEvent.submitter.className == "Emailsubmit" ? Sendemail(e) : null | e.nativeEvent.submitter.className == "Whatsappsubmit" ? regionprice == 0 ? setregionerror(true) : watmenu() : null } className="formval"  >
<label className="label" >Telefoon Nummer</label>
<div className="phone">

       <div className="phonevalues">

       <input onChange={(e) => setnumber(e.target.value)} required maxLength={9} minLength={9} className="phoneinput" type="text" />
       </div>


</div>
<label className="label" >Email Adres</label>
<input onChange={(e) => setemail(e.target.value)} className="email" required  type="email" />

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
<button   className="Emailsubmit" >Uw aanvraag doorsturen per mail</button>
<br />
</form>


                
    
       
                </>
                
                :  <div className="map" >
                
             
                <APIProvider onLoad={() => ("Loaded")} apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
        ">
         <Map
              defaultZoom={10}
              center={markerpos}
              >
                
                <Marker  draggable onDragEnd={(e) => setmarkerpos(e.latLng.toJSON() ) | setlocationchanged(true) } position={markerpos} ></Marker>
        
        </Map>
        </APIProvider>
        </div>
         }
    
              
              
    </>
    
        
    
    
     
    
      )
 
}
