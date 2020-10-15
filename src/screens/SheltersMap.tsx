import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.png';
import '../styles/pages/shelters-map.css';
import api from '../services/api';
import happyMapIcon from '../utils/mapIcon'

interface Shelter{
    id:number;
    latitude:number;
    longitude:number;
    name:string;
}

function SheltersMap(){
    const [shelters, setShelters] = useState<Shelter[]>([]);

    useEffect(() => {
        api.get('shelters').then(response =>{
             setShelters(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <a href="/">
                    <img src={mapMarkerImg} alt="Happy"/>
                    </a>

                    <h2>Escolha um abrigo no mapa</h2>
                    <p>Muitos animaizinhos estão esperando para ter um lar!</p>
                </header>
                <footer>
                    <strong> São Paulo </strong>
                    <span>Cotia e região</span>
                </footer>
            </aside>
            
            <Map 
                center={[-23.5803183,-46.7816684]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
               {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
               <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />

            
                {shelters.map(shelter => {
                    return(
                        <Marker
                            icon = {happyMapIcon}
                            position={[shelter.latitude,shelter.longitude]}
                            key={shelter.id}
                        >
                            <Popup closeButton = {false} minWidth ={240} maxWidth ={240} className="map-popup" > 
                                {shelter.name}
                                <Link to={`/shelters/${shelter.id}`}>
                                     <FiArrowRight size={32} color='#FFF'/>
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

           <Link to="/shelters/create" className="create-shelter">
               <FiPlus size={32} color='#FFF'/>
           </Link>
        </div>
    )
}

export default SheltersMap;