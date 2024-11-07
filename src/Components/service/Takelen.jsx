import { APIProvider , Map , Marker } from "@vis.gl/react-google-maps";



import React, { useState } from 'react'

export default function Takelen() {

    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    const [markerpos , setmarkerpos] = useState({ lat: 50.84852676025505, lng: 4.350960265625017 } )


    const MyLocat = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            console.log(lat , lng)
            setmarkerpos({ lat , lng})
            setcenter({lat, lng})
            console.log(markerpos)
        })
    }

  return (
<>




<div className="mapservice">
        <img width={250} src="LOGO.png" alt="" />
        <div className="mapframe">
            <div className="locationframe" >
            Waar is uw voertuig?
                <button onClick={() => MyLocat()} >Zoek mij</button>

            </div>
            
         
        <APIProvider onLoad={() => console.log("Loaded")} apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
">
 <Map
      defaultZoom={10}
      defaultCenter={ markerpos}
      center={markerpos}
      >
        
        <Marker draggable onDragEnd={(e) => setmarkerpos(e.latLng.toJSON() | console.log(e.latLng.toJSON()) )} position={markerpos} ></Marker>

</Map>
</APIProvider>
            

        </div>


    </div>

</>

    


 

  )
}
