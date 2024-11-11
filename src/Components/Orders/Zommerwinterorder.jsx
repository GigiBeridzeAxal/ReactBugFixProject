import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
import useZoomeremail from "../Hooks/useZoomeremail";
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

    const [checkbox1price1 , setchkp1] = useState(0)
    
    const [checkbox1price2 , setchkp2] = useState(0)
    const [email , setemail] = useState()
    const [desc , setdesc] = useState()
    const [number , setnumber] = useState()
    const [Stockage , setstockage] = useState()
    const [emailsended , setemailsended] = useState(false)
    const [benderr ,setbenderr] = useState(false)
    const [selerr , setselerr] = useState(false)


    const changewindow = () => {window.location = '/'}
    const Sendmail = (e) => {
        e.preventDefault();

        if(regionprice == 0){
            setbenderr(true)

        }else{
            setbenderr(false)
            if(checkbox1price1 !== 0 || checkbox1price2 !==0){
                const Send = () => {
 const price = checkbox1price2 == 150 ?checkbox1price2  :  regionprice + checkbox1price1 + checkbox1price2 

            const Aanvrag = "ZOMER-WINTER BANDEN WISSEL"
            useZoomeremail(email , number , desc , Stockage , price  , Aanvrag)
            setemailsended(true)
                }
                Send()
                
            }else{
                setselerr(true)
            }
           
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
                            {region == "WestVla" ?<button className="choosedbutton" > <img width={120} src="WIELENWISSEL.webp" alt="" /></button> :<button onClick={() => setregion("WestVla") | setregionprice(55) } className="notchoosedbtn" > <img width={120} src="WIELENWISSEL.webp" alt="" /></button>}
                            {region == "OostVla" ?<button className="choosedbutton" > <img width={120} src="12-17.webp" alt="" /></button> :<button onClick={() => setregion("OostVla") | setregionprice(72) }  className="notchoosedbtn" > <img width={120} src="12-17.webp" alt="" /></button>}
                            {region == "Antwerpen" ?<button className="choosedbutton" > <img width={120} src="18-26.webp" alt="" /></button> :<button onClick={() => setregion("Antwerpen") | setregionprice(92) } className="notchoosedbtn" > <img width={120} src="18-26.webp" alt="" /></button>}
    
                        </div>
                        {benderr == true ? <div className="error">Selecteer een van de</div> : null}
                        <div className="bandemat">

                     
                        <div className="checkbox">
                        BANDEN STOCKAGE 1 SEIZOEN <input checked={Stockage == 1 ? true : false} onClick={(e) => e.target.checked == true ?setchkp1(28) |setstockage(1) :    setstockage() | setchkp2(0)  | setchkp1(0)  } type="checkbox" />
                        </div>
                        <div className="checkbox">
                        NIEUWE BANDEN NIET AANGEKOCHT BIJ MBC <input checked={Stockage == 4 ? true : false} onClick={(e) => e.target.checked == true ?setchkp2(150) | setstockage(4) : setstockage() | setchkp2(0)  | setchkp1(0)    } type="checkbox" />
                        </div>
                        {selerr == true ? <div className="error">Selecteer een van de</div> : null}
                        
                    </div>
                    <div className="price">
                        <div className="totalprice"> € {checkbox1price2 == 150 ?checkbox1price2  :  regionprice + checkbox1price1 + checkbox1price2 } BTW INCL.</div>
                        <p>(*) Kostprijs aankoop banden niet inbegrepen</p>
                    </div>
                    </div>
                    
  
                </div>
                <form onSubmit={(e) => Sendmail(e)} className="formval"  >

<label className="label" >Telefoon Nummer</label>
<div className="phone">

       <div className="phonevalues">

       <input required onChange={(e) => setnumber(e.target.value)} maxLength={10} minLength={9} className="phoneinput" type="text" />
       </div>


</div>
<label className="label" >Email Adres</label>
<input onChange={(e) => setemail(e.target.value)} className="email" required  type="email" />
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
                  
<label className="label" >Bericht</label>
<textarea onChange={(e) => setdesc(e.target.value) } className="bericht" required name="" id=""></textarea>

<div className="terms" >
< h1 className="vorwarden">Voorwaarden</h1>
<p className="acepter" >Accepteer het privacybeleid voordat u een verzoek indient.</p>

<div className="termcheckbox">
   <input required type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
</div>

</div>


<button className="Vernden" >VERZENDEN</button>

</form>


                
    
                
                </>
                
               
    
              
    
    </>
    
        
    
    
     
    
      )
 
}
