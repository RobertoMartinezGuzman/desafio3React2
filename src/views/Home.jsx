import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export default function Home () {



    
    return (
    <div className="container mt-5 text-center">
        <h2>Bienvenido maestro Pokemón</h2>
        <img className="imagen-home" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="" />
    </div>

    )
}