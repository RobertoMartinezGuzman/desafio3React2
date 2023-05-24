import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export default function Pokemones () {

    const url = "https://pokeapi.co/api/v2/pokemon"
    const [results, setResults] = useState([]);
    const [name, setName] = useState("bulbasaur");

    const getData = async() => {
        const res = await fetch(url);
        const {results} = await res.json();

        setResults(results);
       
    }

    useEffect(()=>{
        getData();
        
    }, [])

    const navigate = useNavigate();

    const irPokemon = () => {
        navigate(`/pokemones/${name}`)
    }

    return (
        <div className="container mt-5 text-center">
        <h2>Selecciona un Pokemón</h2>
        <Form.Select className="m-auto" aria-label="Default select example" onChange={({target})=> setName(target.value)}>
            {results.map((pokemon, i)=> <option key={i} value={pokemon.name}>{pokemon.name}</option>)}
    
        </Form.Select>       

        <button className="mt-3 bg-dark text-white" onClick={irPokemon}>Ver Detalle</button>
        </div>

    )
}