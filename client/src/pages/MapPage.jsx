import React, { useEffect, useState } from "react";
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import axios from 'axios'
import MapData from "./MapData";


const MapPage = (props) => {

    const [markers, setMarkers] = useState([])

    // const markers = [
    //     { 
    //         locationname: "chennai",
    //         address: "ambattur",
    //         lat: 13.0827, 
    //         lng: 80.2707 
    //     },
    //     { 
    //         locationname: "Shree Retina Care",
    //         address: "Raipur",
    //         lat: 21.19914, 
    //         lng: 81.61105 
    //     }
    // ];


    const getLocationData = async () => {
        try {
            const response = await axios.get("http://localhost:7000/locations",) 
            console.log("API Response:", response.data.locations);
            // setMarkers(response.data.locations)   
            if(response.data.success) {
                setMarkers(response.data.locations)
                // console.log("responseData", response.data)
            } else {
                console.error("API Error:", response.data.message);
            }
            // console.log("responseData", response.data)  
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getLocationData()
    }, [])

    console.log("markers", markers)

    return ( 
        <>
             <MapData />
            <p>Google map </p>
            <div className="google-map">
                <Map
                    google={props.google}
                    zoom={10}
                    style={{     
                        width: "100%",  
                        height: "100%"
                    }}
                    initialCenter={{  
                        lat: 21.19914, 
                        lng: 81.61105
                    }}
                    >
                    { markers && markers.map((marker, index) => (
                        <>
                            <Marker
                                key={index}
                                position={marker}
                                title={`Marker ${index + 1}`}   
                            />
                            <p>{marker?.address}</p>
                        </>
                    ))}
                </Map>
            </div>   
           
        </>
     );
}

export default GoogleApiWrapper({
    apiKey: '',
    // process.env.apiKey,
  })(MapPage);
