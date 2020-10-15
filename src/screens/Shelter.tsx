import React, {useEffect, useState} from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import {useParams} from 'react-router-dom'

import Sidebar from "../components/Sidebar";
import happyMapIcon from '../utils/mapIcon'

import api from '../services/api';
import '../styles/pages/shelter.css';

interface Shelter{
  id:number;
  latitude:number;
  longitude:number;
  name:string;
  about: string;
  instructions: string;
  opening_hours:string,
  open_on_weekends:boolean;
  images:Array<{
    url:string;
    id:number;
  }>;
}

interface ShelterParams{
  id:string;
}

export default function Shelter() {
  const params = useParams<ShelterParams>();
  const [shelter, setShelter] = useState<Shelter>();
  const [activeImageIndex, setActiveImageIndex]= useState(0);

  useEffect(() => {
      api.get(`shelters/${params.id}`).then(response =>{
           setShelter(response.data);
      });
  }, [params.id]);

  if(!shelter){
    return <p>Carregando...</p>;
  }

  return (
    <div id="page-shelter">
      <Sidebar/>

      <main>
        <div className="shelter-details">
          <img src={shelter.images[activeImageIndex].url} alt={shelter.name} />

          <div className="images">
            {shelter.images.map((image, index) =>{
              return(
                <button key={image.id} 
                className={activeImageIndex == index ? 'active' : ''} 
                type="button"
                onClick={()=>{
                  setActiveImageIndex(index)
                } }>
                  <img src={image.url} alt={shelter.name} />
                </button>
              )
            })}
            
          </div>
          
          <div className="shelter-details-content">
            <h1>{shelter.name}</h1>
            <p>{shelter.about}</p>

            <div className="map-container">
              <Map 
                center={[shelter.latitude,shelter.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[shelter.latitude,shelter.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel= "noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`}>
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita e/ou adoção</h2>
            <p>{shelter.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                  Segunda à Sexta <br />
                  {shelter.opening_hours}
              </div>

              {shelter.open_on_weekends ? (
                <div className="open-on-weekends ">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF6690" />
                Não atendemos <br />
                fim de semana
              </div>

              )}
            </div>

            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
}