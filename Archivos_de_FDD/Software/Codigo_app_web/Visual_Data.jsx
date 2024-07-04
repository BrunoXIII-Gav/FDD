import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from 'socket.io-client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './VisualData.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuracion marcador
const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que corresponde a la ubicación del marcador
    popupAnchor: [1, -34], // Punto desde el que debería abrirse el popup
    shadowSize: [41, 41] // Tamaño de la sombra
});

const socket = io('http://192.168.18.10:8080');


const VisualData = () => {
    const { id } = useParams();
    const [datos, setDatos] = useState({
        pm10: '',
        pm2_5: '',
        co: '',
        decibeles: '',
        distancia: '',
    });
    const datosFijos = {
        pm10_v2: 45,
        pm2_5_v2: 36,
        co_v2: 59,
        decibeles_v2: 86,
        latitud_v2: null,
        longitud_v2: null,
    }

    useEffect(() => {
        
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Permiso de notificación concedido");
                } else {
                    console.log("Permiso de notificación denegado");
                }
            });
        }

        socket.on('connect', () => {
            console.log('Conectado al servidor socket');
        });
        socket.on('nuevosDatos', (nuevoDato) => {
            console.log('Datos recibidos:', nuevoDato);
            setDatos(nuevoDato);
            if (nuevoDato.decibeles>85) {
                showNotification();
            }
            if (nuevoDato.co>200 || nuevoDato.pm10>50 || nuevoDato.pm2_5>30) {
                showNotification2();
            }
        });

        return () => {
            socket.off('nuevosDatos');
            socket.off('connect');
        };
    }, []);

    const showNotification = (distancia) => {
        if (Notification.permission === "granted") {
            new Notification("Alerta: Tomar precaución",{
                body: `Altos niveles de ruido en la zona`,
                icon: markerIcon
            });
        }
    };

    const showNotification2 = () => {
        if (Notification.permission === "granted"){
            new Notification("Alerta: Tomar precaución",{
                body:`Altos niveles de contamincacion del aire en la zona`,
                icon: markerIcon
            });
        }
    }

    const handleDownload = async () => {
        try {
            const response = await fetch('http://192.168.18.10:8081/descargarExcel');
            if (!response.ok) {
                throw new Error('Error al descargar el archivo');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'datos.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };

    return (
        <div className="container3">
            <h1 className="title">Datos en Tiempo Real</h1>
            <div>
                <button className="boton" onClick={handleDownload}>Descargar Excel!</button>
            </div>
            <MapContainer center={[-11.706062, -76.267964]} zoom={17} scrollWheelZoom={false} style={{ height: '450px', width: '65%'}} className="map-container">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[-11.706062, -76.267964]} icon={customIcon}>
                    <Popup>
                        {id === "Contaminación aire" && (
                            <>
                                PM10: {datos.pm10} µg/m³ <br />
                                PM2.5: {datos.pm2_5} µg/m³ <br />
                                CO: {datos.co} ppm
                            </>
                        )}
                        {id === "Contaminacion del ruido" && (
                            <>
                                Decibeles: {datos.decibeles} dB<br />
                                Distancia: {datos.distancia} cm
                            </>
                        )}
                    </Popup>
                </Marker>
                <Marker position={[datosFijos.latitud_v2||-11.705122, datosFijos.longitud_v2||-76.268470]} icon={customIcon}>
                    <Popup>
                        {id === "Contaminación aire" && (
                            <>
                                PM10: {datosFijos.pm10_v2} µg/m³<br />
                                PM2.5: {datosFijos.pm2_5_v2} µg/m³<br />
                                CO: {datosFijos.co_v2} ppm
                            </>
                        )}
                        {id === "Contaminacion del ruido" && (
                            <>
                                Decibeles: {datosFijos.decibeles_v2} dB<br />
                            </>
                        )}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default VisualData;