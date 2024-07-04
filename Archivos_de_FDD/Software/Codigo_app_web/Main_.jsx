import React from "react";
import { useNavigate } from "react-router-dom";
import './Main.css'; 

const Main = () => {
    const navigate = useNavigate();
    const texto1 = 'En el marco de la Universidad Peruana Cayetano Heredia, un grupo de estudiantes provenientes de las carreras de Ingeniería Informática y Ambiental se ha unido con el propósito de desarrollar un proyecto relevante para abordar la problemática ambiental sobre la contaminacion sonora y del aire que afecta al pueblo de Chicla y, por ende, se ha desarrollado este proyecto el cual se enfoca en abordar el problema antes mencionado'; // Texto completo aquí

    return (
        <div className="fullscreen">
            <div className="container">
                <div className="header">
                    <h1 className="title">AirVibe</h1>
                </div>
                <div className="image">
                    <img className="image_carac"
                        src="https://www.legaltoday.com/wp-content/uploads/2023/05/impacto-ambiental696.jpg"
                        alt="Impacto Ambiental"
                    />
                    <img className="image_carac"
                        src="https://100.cientifica.edu.pe/wp-content/uploads/2021/12/a161.jpg"
                        alt="sonido"
                    />
                </div>
                
                <div>
                    <h2 className="capital">Sobre Nosotros</h2>
                    <p className="nosotros">{texto1}</p>
                </div>
                <img className="image_2" src="https://www.iessdeh.org/images/logo-centro-de-investigacion3.jpg" alt="Centro de Investigación" />
            </div>
            <div className="footer" onClick={() => navigate('/menuOpti')}>                    
                <span className="menu">Menu</span>
            </div>
        </div>
    );
};

export default Main;