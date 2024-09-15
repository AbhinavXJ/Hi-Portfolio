"use client"

import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect } from 'react'
import { useRef } from 'react'

function Map({location}) {
   
    const mapRef=useRef(null)

    useEffect(()=>{

        const initMap = async ()=>{
        const loader = new Loader({
            apiKey:process.env.NEXT_PUBLIC_MAPS_API_KEY,
            version:"weekly"
        })

        const {Map}=await loader.importLibrary('maps')
        const {Marker}=await loader.importLibrary('marker')
        let data;
        if(location){
            const cordObj = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`)
            data = await cordObj.json()

        }else{
            const cordObj = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`)
            data = await cordObj.json()

        }
        

        const {lat,lng} = data.results[0].geometry.location
        const position = {
            lat:lat,
            lng:lng
        }

        const initposition = {
            lat:37.3346,
            lng:-122.009102
        }

        const mapOptions = {
            center:position?position:initposition,
            zoom:17,
            mapId:"Gitfolio"
        }

        const map = new Map(mapRef.current,mapOptions)
        const marker = new Marker({
            map:map,
            position:position?position:initposition
        })
    }
    initMap()

    },[]
    )






  return (
    <div className='h-full w-full ' ref={mapRef}>

    </div>
  )
}

export default Map