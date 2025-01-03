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
    const [emailsended , setemailsended ] = useState(false)
    const [tiresize , settiresize] = useState(205)
    const [tiresize2 , settiresize2] = useState(55)
    const [tiresize3 , settiresize3] = useState("R16")
    const [tiresize4 , settiresize4] = useState(91)
    const [tiresize5 , settiresize5] = useState("T")
    const [bandenmerk , setbandenmerk] = useState("Geen voorkeur")
    const changewindow = () => {window.location = '/'}
   
    const Sendmail = (e) => {
        e.preventDefault();


        const Aanvraag = "Aanvraag banden"
        useOnlineemail(email , number , desc  , Aanvraag , TypeBand , tiresize, tiresize2 , tiresize3 , tiresize4 , tiresize5 , bandenmerk )
        setemailsended(true)



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

                    <div className="bandeemchoose">
                        <div className="bandemcheckbox">
                            <label htmlFor="">Ik weet mijn bandenmaat niet</label> <input type="checkbox" />
                        </div>
                        <div className="bandenmaat">
                        <div className="bandemattitle">Bandenmaat: </div>
                        <div className="selectlistband">
                        <select onChange={(e) => settiresize(e.target.value)} value={tiresize} name="" id="">
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
                            <select onChange={(e) => settiresize2(e.target.value)} value={tiresize2} name="" id="">
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
                            <select onChange={(e) => settiresize3(e.target.value)} value={tiresize3} name="" id="">
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
                            <select onChange={(e) => settiresize4(e.target.value)} value={tiresize4} name="" id="">
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
                            <option value="70">70</option>
<option value="71">71</option>
<option value="72">72</option>
<option value="73">73</option>
<option value="74">74</option>
<option value="75">75</option>
<option value="76">76</option>
<option value="77">77</option>
<option value="78">78</option>
<option value="79">79</option>
<option value="80">80</option>
<option value="81">81</option>
<option value="82">82</option>
<option value="83">83</option>
<option value="84">84</option>
<option value="85">85</option>
<option value="86">86</option>
<option value="87">87</option>
<option value="88">88</option>
<option value="89">89</option>
<option value="90">90</option>
<option value="91">91</option>
<option value="92">92</option>
<option value="93">93</option>
<option value="94">94</option>
<option value="95">95</option>
<option value="96">96</option>
<option value="97">97</option>
<option value="98">98</option>
<option value="99">99</option>
<option value="100">100</option>
<option value="101">101</option>
<option value="102">102</option>
<option value="103">103</option>
<option value="104">104</option>
<option value="105">105</option>
<option value="106">106</option>
<option value="107">107</option>
<option value="108">108</option>
<option value="109">109</option>
<option value="110">110</option>
<option value="111">111</option>
<option value="112">112</option>
<option value="113">113</option>
<option value="114">114</option>
<option value="115">115</option>
<option value="116">116</option>
<option value="117">117</option>
<option value="118">118</option>
<option value="119">119</option>
<option value="120">120</option>
<option value="121">121</option>
<option value="122">122</option>
<option value="123">123</option>
<option value="124">124</option>
<option value="125">125</option>
<option value="126">126</option>
<option value="127">127</option>
<option value="128">128</option>
<option value="129">129</option>
<option value="130">130</option>
    
    
                            </select>
                            <select onChange={(e) => settiresize5(e.target.value)} value={tiresize5} name="" id="">
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
                            <select value={bandenmerk} onChange={(e) => setbandenmerk(e.target.value)} name="" id="">
                            <option value="R">Geen voorkeur</option>
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
                            <option value="Summer">Zomerbanden</option>
                            <option value="Winter">Winterbanden </option>
                            <option value="All Seasons">4 seizoensbanden</option>

    
    
                            </select>
                        </div>
                       
                    </div>

                       

                    
  
                </div>
                <form onSubmit={(e) => Sendmail(e)} className="formval"  >

<label className="label" >Telefoon Nummer</label>
<div className="phone">
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

       <div className="phonevalues">

       <input onChange={(e) => setnumber(e.target.value)} required maxLength={10} minLength={9} className="phoneinput" type="text" />
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
