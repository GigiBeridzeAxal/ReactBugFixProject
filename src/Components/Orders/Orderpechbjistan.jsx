import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";



import React, { useState } from 'react'
export default function Orderpechbjistan() {
    
    
    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )
    const [locationchanged , setlocationchanged] = useState(false)
    const [order , setorder] = useState(false)

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

  return (
<>




{order == true ? null: <div className="locationframe" >
            Waar is uw voertuig?

            {locationchanged == true ? <button onClick={() => setorder(true)} >Doorgaan</button>:<button onClick={() => MyLocat()} >Zoek mij</button>}



            </div>}
           
            {order == true ?
            <>

            <div>
                <div className="regions">
                    <div className="regiontittle">KIES UW REGIO</div>
                    <div className="regionbtn">
                        <img width={120} src="WestVla.webp" alt="" />
                        <img width={120} src="OostVla.webp" alt="" />
                        <img width={120} src="Antwerpen.webp" alt="" />
                    </div>
                </div>
                <div className="choose">
                    <div className="choosetittle">KIES INDIEN VAN TOEPASSING</div>
                    <div className="chooselist">
                        <button><img width={112} src="velvebroken.webp" alt="" /></button>
                        <button><img width={112} src="visiOrDroveFlat.webp" alt="" /></button>
                    </div>
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
                    </div>
                    <div className="checkbox">
                    IK WEET MIJN BANDENMAAT NIET: <input type="checkbox" />
                    </div>
                    
                </div>
                <div className="price">
                    <div className="totalprice"> €0 BTW INCL.</div>
                    <p>(*) Kostprijs aankoop banden niet inbegrepen</p>
                </div>
            </div>
            

            
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
