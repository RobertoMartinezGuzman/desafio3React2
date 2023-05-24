import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Filtro () {


    const { name } = useParams();


    const url = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState({})



    const getData = async() => {
        const res = await fetch(url + name);
        const data = await res.json();

        setPokemon(data)
        
    }  



    useEffect(()=>{
        getData();
        
    }, [])


    return (
    
       <div className="container text-center mt-5 p-5 contenedor-informacion">
            <div className="img-poke">
                <img className="img-pokemon" src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} alt="" />
            </div>
            <div className="informacion-pokemon">
            <h4>{pokemon.name}</h4>
            <li>hp: {pokemon.stats && pokemon.stats[0].base_stat}</li>
            <li>attack: {pokemon.stats && pokemon.stats[1].base_stat}</li>
            <li>defense: {pokemon.stats && pokemon.stats[2].base_stat}</li>
            <li>special-attack: {pokemon.stats && pokemon.stats[3].base_stat}</li>
            <li>special-defense: {pokemon.stats && pokemon.stats[4].base_stat}</li>
            <li>speed: {pokemon.stats && pokemon.stats[5].base_stat}</li>
            <div className="mt-2 text-start">
            <h6>{pokemon.types && pokemon.types[0].type.name }</h6>
            </div>

          
            </div>
            
        </div>
    )
}