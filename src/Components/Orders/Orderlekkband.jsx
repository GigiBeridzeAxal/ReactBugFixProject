import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
import useEmail from "../Hooks/useEmail";
import useWatsapp from "../Hooks/useWatsapp";
export default function Orderpechbjistan() {
    
    
    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [locationchanged , setlocationchanged] = useState(false)
    const [order , setorder] = useState(false)
    const [validationopened , setvalidationopened] = useState(false)
    const [user,setuser] = useState("Wazaa")

    const [region , setregion] = useState()
    const [chooser , setchooser] = useState()

    const [regionprice , setregionprice] = useState(0)
    const [chooserprice , setchooserprice] = useState(0)


    const [country ,setcountry] = useState()
    const [countryocode , setcountrycode] = useState()

    const [email , setemail] = useState()
    const [desc , setdesc] = useState()
    const [number , setnumber] = useState()
    const lat = markerpos.lat
    const lng = markerpos.lng
    const [watsappmenu , setwatsappmenu] = useState(false)
    const [numbersucces , setnumbersucc] = useState()
    const [descsucc , setdescsucc] = useState()
    const [emailsucc , setemailsucc] = useState()
    const [emailsended , setemailsended] = useState(false)
    const [regionerr , setregerr] = useState(false)
    const [choosererr , setcherr] = useState(false)
    const [choosedregion , setchoosedregion] = useState()
    const [region2price , setregion2price] = useState(145)
    useEffect(() => {
 
        const date = new Date()
        const day = date.getDay()
        const hours = date.getHours()
        const houreight = date.setHours(8)
        const houreighteen = date.setHours(18)


        if(day >= 1){
            if(day <= 5){

                if(hours >= houreight){
                    if(hours <= houreighteen){
                        setregion2price(95)
                    }
                }
                if(hours >= houreighteen){
     
                        setregion2price(145)
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
   
        if(!number || !desc || !email){

            if(!number){
                setnumbersucc(true)

            }else{
                setnumbersucc(false)
            }
            if(!desc){
                setdescsucc(true)

            }else{
                setdescsucc(false)
            }
            if(!email){
                setemailsucc(true)

            }else{
                setemailsucc(false)
            }

        }else{

            if(number.length < 9 || !email.includes('@')){
                
                if(number.length < 9){
                    console.log(number.length)
                }

                if(!email.includes('@')){
                    console.log(number.length)
                }
            }



        }
        setwatsappmenu(true)


    }

    const Sendwatsapp = () =>{
        const Aanvraag = "PECHBIJSTAND LEKKE BAND"
        const price = chooserprice + regionprice
        

        useWatsapp(email , number , desc , markerpos.lat , markerpos.lng , region , chooser , Aanvraag , price)


    }

    const validopener = () => {
        if(!region){

            if(!region){
                setregerr(true)
            }else{
                setregerr(false)
            }




        }else{
            setvalidationopened(true)
        }
    }

    const Sendemail = async(e) => {

        const Aanvraag = "PECHBIJSTAND LEKKE BAND"
        const price = chooserprice + regionprice
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
      
      <form onSubmit={(e) => e.preventDefault() | e.nativeEvent.submitter.className == "Emailsubmit" ? Sendemail() : null | e.nativeEvent.submitter.className == "Whatsappsubmit" ? Sendwatsapp() : null } className="formval"  >

     <label className="label" >Telefoon Nummer</label>
     <div className="phone">

            <div className="phonevalues">

            <input onChange={(e)=>setnumber(e.target.value)}  required maxLength={10} minLength={9} className="phoneinput" type="text" />
            {numbersucces == true ? <div className="error">Bericht is vereist. Beschrijf uw verzoek</div> : null}
            </div>


     </div>
     <label className="label" >Email Adres</label>
     <input onChange={(e)=>setemail(e.target.value)} className="email" required  type="email" />

     <label className="label" >Bericht</label>
     <textarea onChange={(e)=> setdesc(e.target.value) | console.log(desc)} className="bericht" type="text" required ></textarea>
  

     <div className="terms" >
     < h1 className="vorwarden">Voorwaarden</h1>
     <p className="acepter" >Accepteer het privacybeleid voordat u een verzoek indient.</p>

     <div className="termcheckbox">
        <input required type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
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
    

     <button  className="Whatsappsubmit" >Uw aanvraag doorsturen per Whatsapp</button>
     <button   className="Emailsubmit" >Uw aanvraag doorsturen per mail</button>


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
                        {regionerr == true ? <div className="error">Selecteer een van de</div> : null}
                    </div>
                    <div className="choose">
                        <div className="choosetittle">KIES INDIEN VAN TOEPASSING</div>
                        <div className="chooselist">
                            {chooser == "velvebroken" ?<button  ><img className="choosedchooser" width={112} src="velveBroken.webp" alt="" /></button> :  <button onClick={() => setchooser("velvebroken") | setchooserprice(50) } className="notchoosedchooser" ><img width={112} src="velveBroken.webp" alt="" /></button> }
                            {chooser == "visiOrDroveFlat" ?<button  ><img className="choosedchooser" width={112} src="visiOrDroveFlat.webp" alt="" /></button> :  <button onClick={() => setchooser("visiOrDroveFlat") | setchooserprice(0) }  className="notchoosedchooser" ><img width={112} src="visiOrDroveFlat.webp" alt="" /></button> }
                      
                        </div>
                        {choosererr == true ? <div className="error">Selecteer een van de</div> : null}
                      
                    </div>
                    <div className="bandemat">
                        <div className="bandemattitle">Bandenmaat</div>
                        <div className="selectlist">
                            <select name="" id="">
                            <option value="315">315</option>
                            <option value="325">325</option>
                            <option value="335">335</option>
                            <option value="305">305</option>
                            <option value="295">295</option>
                            <option value="285">285</option>
                            <option value="275">275</option>
                            <option value="265">265</option>
                            <option value="255">255</option>
                            <option value="245">245</option>
                            <option value="235">235</option>
                            <option value="225">225</option>
                            <option value="215">215</option>
                            <option value="205">205</option>
                            <option value="195">195</option>
                            <option value="185">185</option>
                            <option value="175">175</option>
                            <option value="165">165</option>
                            <option value="155">155</option>
    
    
                            </select>
                            <select name="" id="">
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="35">35</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                            <option value="55">55</option>
                            <option value="60">60</option>
                            <option value="65">65</option>
                            <option value="70">70</option>
                            <option value="75">75</option>
                            <option value="80">80</option>
    
    
    
                            </select>
                            <select name="" id="">
                            <option value="R10"> R10 </option>
                            <option value="R11">R11</option>
                            <option value="R12">R12</option>
                            <option value="R13">R13</option>
                            <option value="R14">R14</option>
                            <option value="R15">R15</option>
                            <option value="R16">R16</option>
                            <option value="R17">R17</option>
                            <option value="R18">R18</option>
                            <option value="R19">R19</option>
                            <option value="R20">R20</option>
                            <option value="R21">R21</option>
                            <option value="R22">R22</option>
                            <option value="R23">R23</option>
    
    
                            </select>
                            <select name="" id="">
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                            <option value="60">60</option>
                            <option value="61">61</option>
                            <option value="62">62</option>
                            <option value="63">63</option>
                            <option value="64">64</option>
                            <option value="65">65</option>
                            <option value="66">66</option>
                            <option value="67">67</option>
                            <option value="68">68</option>
                            <option value="69">69</option>
    
    
                            </select>
                            <select name="" id="">
                            <option value="R">R</option>
                            <option value="S">S</option>
                            <option value="T">T</option>
                            <option value="H">H</option>
                            <option value="V">V</option>
                            <option value="W">W</option>
                            <option value="Y">Y</option>
    
    
                            </select>
                        </div>
                        <div className="checkbox">
                        IK WEET MIJN BANDENMAAT NIET: <input type="checkbox" />
                        </div>
                        
                    </div>
                    <div className="price">
                        <div className="totalprice"> € {regionprice + chooserprice} BTW INCL.</div>
                        <p>(*) Kostprijs aankoop banden niet inbegrepen</p>

                    </div>
    
                </div>
  
   
                <button onClick={() => validopener()} className='orderbutton' >prijsofferte/interventie aanvragen in 2 stappen</button>
                    <br />

                
                </>
                
                
                
                :  <div className="map" >
                    
                
             
                <APIProvider onLoad={() => console.log("Loaded")} apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
        ">
         <Map
              defaultZoom={10}
              center={markerpos}
              >
                
                <Marker  draggable onDragEnd={(e) => setmarkerpos(e.latLng.toJSON() )| setlocationchanged(true) |  console.log(e.latLng.toJSON()) } position={markerpos} ></Marker>
        
        </Map>
        </APIProvider>
        
        </div>
         }
    
              
    
    </>
    
        
    
    
     
    
      )
 
}
