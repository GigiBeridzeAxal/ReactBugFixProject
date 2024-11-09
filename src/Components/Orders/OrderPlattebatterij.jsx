import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function OrderPlattebatterij() {
    
    
    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [locationchanged , setlocationchanged] = useState(false)
    const [order , setorder] = useState(false)
    const [validationopened , setvalidationopened] = useState(false)

    const [region , setregion] = useState()
    const [chooser , setchooser] = useState()

    const [regionprice , setregionprice] = useState(0)
    const [chooserprice , setchooserprice] = useState(0)


    const [country ,setcountry] = useState()
    const [countryocode , setcountrycode] = useState()





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
                            {region == "WestVla" ?<button className="choosedbutton" > <img width={120} src="WestVla.webp" alt="" /></button> :<button onClick={() => setregion("WestVla") | setregionprice(195) } className="notchoosedbtn" > <img width={120} src="WestVla.webp" alt="" /></button>}
                            {region == "OostVla" ?<button className="choosedbutton" > <img width={120} src="OostVla.webp" alt="" /></button> :<button onClick={() => setregion("OostVla") | setregionprice(145) }  className="notchoosedbtn" > <img width={120} src="OostVla.webp" alt="" /></button>}
                            {region == "Antwerpen" ?<button className="choosedbutton" > <img width={120} src="Antwerpen.webp" alt="" /></button> :<button onClick={() => setregion("Antwerpen") | setregionprice(195) } className="notchoosedbtn" > <img width={120} src="Antwerpen.webp" alt="" /></button>}
    
                        </div>
                        <div className="price">
                        <div className="totalprice"> € {regionprice + chooserprice} </div>
                        <p>(*) Prijs excl. Aankoop batterij</p>
                    </div>
                    </div>
                  
                   
                   
                        
                    </div>
                    <form className="formval"  >

<label className="label" >Telefoon Nummer</label>
<div className="phone">
</div>
       <div className="phonevalues">
       <input required maxLength={9} minLength={9} className="phoneinput" type="text" />


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
<br />


</form>

                
    
                
                </>
                
                :  <div className="map" >
                
             
                <APIProvider onLoad={() => console.log("Loaded")} apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
        ">
         <Map
              defaultZoom={10}
              center={markerpos}
              >
                
                <Marker  draggable onDragEnd={(e) => setmarkerpos(e.latLng.toJSON() | setlocationchanged(true) |  console.log(e.latLng.toJSON()) )} position={markerpos} ></Marker>
        
        </Map>
        </APIProvider>
        </div>
         }
    
              
    
    </>
    
        
    
    
     
    
      )
 
}
