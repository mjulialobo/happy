import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import mapMarkerImg from '../images/map-marker.png';
import '../styles/pages/shelters-map.css';

function SheltersMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

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
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

            </Map>

           <Link to="" className="create-shelter">
               <FiPlus size={32} color='#FFF'/>
           </Link>
        </div>
    )
}

export default SheltersMap;