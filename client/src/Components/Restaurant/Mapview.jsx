import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//[20.154526852044825, 74.05805850627164]
const Mapview = (props) => {
  return (
    <>
      <div>
        <h4 className="text-xl font-medium">Call</h4>
        <h5 className="text-zomato-400 font-medium">{props.phno}</h5>
      </div>
      <div>
        <h4 className="text-xl font-medium">Direction</h4>
        <div className="w-full h-48">
          <MapContainer
            center={[18.549593391130553, 73.74955514635063]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[18.549593391130553, 73.74955514635063]}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <p>{props.address}</p>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
          <MdContentCopy /> Copy
        </button>

        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
          <span className="text-zomato-400">
            <FaDirections />
          </span>
          Direction
        </button>
      </div>
    </>
  );
};

export default Mapview;
