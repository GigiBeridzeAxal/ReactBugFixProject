import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";
import ReactFlagsSelect from "react-flags-select";
import { getCountryCallingCode } from 'libphonenumber-js';


import React, { useEffect, useState } from 'react'
import axios from "axios";
import useOnlineemail from "../Hooks/useOnlineemail";
export default function Onlinebandenorder() {
    
    
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

    const [country ,setcountry] = useState()
    const [countryocode , setcountrycode] = useState()
    const [TypeBand , setTypeBand] = useState("Summer")

   
    const Sendmail = (e) => {
        e.preventDefault();
        console.log("Working")

        const Aanvrag = "ONLINE BANDEN KOPEN MET MONTAGE AAN HUIS"
        useOnlineemail(email , number , desc  , Aanvrag , TypeBand )



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
    
                <div className="orderframe" >

                    <div className="bandeemchoose">
                        <div className="bandemcheckbox">
                            <label htmlFor="">Ik weet mijn bandenmaat niet</label> <input type="checkbox" />
                        </div>
                        <div className="bandenmaat">
                        <div className="bandemattitle">Bandenmaat </div>
                        <div className="selectlistband">
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


                        </div>
                        <div className="bandenmerk">
                            <label htmlFor="">Bandenmerk</label>      
                            <select name="" id="">
                            <option value="R">I Don't Know Brand Names</option>
                            <option value="S">Budget</option>
                            <option value="T">Bridgestone</option>
                            <option value="H">Continental</option>
                            <option value="V">Dunlop</option>
                            <option value="W">Googyear</option>
                            <option value="Y">Hankook</option>
                            <option value="V">Michelin</option>
                            <option value="W">Pirelli</option>
                            <option value="Y">Uniroyal</option>
    
    
                            </select>
                        </div>
                        <div className="TypeBand">
                            <label htmlFor="">Type Band</label>      
                            <select onChange={(e) => setTypeBand(e.target.value)} name="" id="">
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="All Seasons">All Seasons</option>

    
    
                            </select>
                        </div>
                       
                    </div>

                       

                    
  
                </div>
                <form onSubmit={(e) => Sendmail(e)} className="formval"  >

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
   <input  type="checkbox" /> Ik heb het privacybeleid gelezen en ga ermee akkoord
</div>

</div>


<button className="Vernden" >VERZENDEN</button>

</form>


                
    
                
                </>
                
               
    
              
    
    </>
    
        
    
    
     
    
      )
 
}
