import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuOpti.css'; 

const repositorios = [
    {
        id: 'Contaminación aire',
        imagen: 'https://cflvdg.avoz.es/sc/4HmqYT_22L8xTbQsLuasCLiFXaE=/1280x/2018/03/28/00121522271521845714576/Foto/j28m8053.jpg'
    },
    {
        id: 'Contaminacion del ruido',
        imagen: 'https://www.fundacionaquae.org/wp-content/uploads/2021/04/contaminacion-acustica.jpg'
    }
];

const MenuOpti = () => {
    const navigate = useNavigate();

    return (
        <div className="container2">
            {repositorios.map(repo => (
                <div key={repo.id} className="card" onClick={() => navigate(`/visualdata/${repo.id}`)}>
                    <h2 className="card_title">{repo.id}</h2>
                    <img src={repo.imagen} className="card_image" alt={repo.id} />
                </div>
            ))}
        </div>
    );
};

export default MenuOpti;