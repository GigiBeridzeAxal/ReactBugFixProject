import React, { useEffect, useState } from 'react'
import { APIProvider , Map , Marker , InfoWindow} from "@vis.gl/react-google-maps";
import { useParams } from 'react-router-dom';



export default function Maps() {
    const {lat} = useParams()
    const {lng} = useParams()

    const locat = {lat:Number(lat), lng:Number(lng)} 

    console.log(locat)



    const [center ,setcenter] = useState({lat:0.5353, lng:0.53515})
    console.log(lat,lng)
    const [markerpos , setmarkerpos] = useState({lat:0.5353, lng:0.53515} )


    console.log("hello")
  return (
    <div className='Map' > <APIProvider onLoad={() => console.log("Loaded")} apiKey="AIzaSyBYrVjCDtU5vIiwetkkggADFrFhW8VVjQ4
    ">
     <Map
          defaultZoom={10}
          defaultCenter={locat}
          >
            
            <Marker   position={locat} ></Marker>
    
    </Map>
    </APIProvider></div>
   
  )
}
