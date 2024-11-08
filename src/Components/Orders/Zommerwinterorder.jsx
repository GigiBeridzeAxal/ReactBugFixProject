import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function Zommerwinterorder() {
    
    
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

    useEffect(() => {


        const getcountry = async() => {
            try{
                console.log("Working")
    
                const response = await axios.get('https://ipinfo.io/?token=9921af2e78e840');
                const countrycode = getCountryCallingCode(response.data.country)
                setcountrycode(countrycode)
                setcountry(response.data.country)
    
            }catch(err){
    
            }
        }
        getcountry()
    },[])


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
        <div className="country"><ReactFlagsSelect showSelectedLabel={false} showOptionLabel={false} onSelect={(sel) => setcountry(sel)}  selected={country}  >
            
            </ReactFlagsSelect></div>
            <div className="phonevalues">
                <div className="phonecode">+{countryocode}</div>
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
    
                <div className="orderframe" >
                    <div className="regions">
                        <div className="regiontittle">MAAK UW KEUZE</div>
                        <div className="regionbtn">
                            {region == "WestVla" ?<button className="choosedbutton" > <img width={120} src="WIELENWISSEL.webp" alt="" /></button> :<button onClick={() => setregion("WestVla") | setregionprice(145) } className="notchoosedbtn" > <img width={120} src="WIELENWISSEL.webp" alt="" /></button>}
                            {region == "OostVla" ?<button className="choosedbutton" > <img width={120} src="12-17.webp" alt="" /></button> :<button onClick={() => setregion("OostVla") | setregionprice(95) }  className="notchoosedbtn" > <img width={120} src="12-17.webp" alt="" /></button>}
                            {region == "Antwerpen" ?<button className="choosedbutton" > <img width={120} src="18-26.webp" alt="" /></button> :<button onClick={() => setregion("Antwerpen") | setregionprice(145) } className="notchoosedbtn" > <img width={120} src="18-26.webp" alt="" /></button>}
    
                        </div>
                        <div className="bandemat">

                     
                        <div className="checkbox">
                        BANDEN STOCKAGE 1 SEIZOEN <input type="checkbox" />
                        </div>
                        <div className="checkbox">
                        NIEUWE BANDEN NIET AANGEKOCHT BIJ MBC <input type="checkbox" />
                        </div>
                        
                    </div>
                    <div className="price">
                        <div className="totalprice"> € {regionprice + chooserprice} BTW INCL.</div>
                        <p>(*) Kostprijs aankoop banden niet inbegrepen</p>
                    </div>
                    </div>
                    
  
                </div>
                <form className="formval"  >

<label className="label" >Telefoon Nummer</label>
<div className="phone">
   <div className="country"><ReactFlagsSelect showSelectedLabel={false} showOptionLabel={false} onSelect={(sel) => setcountry(sel)}  selected={country}  >
       
       </ReactFlagsSelect></div>
       <div className="phonevalues">
           <div className="phonecode">+{countryocode}</div>
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


<button className="Vernden" >VERZENDEN</button>

</form>


                
    
                
                </>
                
               
    
              
    
    </>
    
        
    
    
     
    
      )
 
}
