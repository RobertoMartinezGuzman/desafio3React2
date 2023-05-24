import { NavLink } from "react-router-dom"



export default function Navbar () {

    const setActiveClass = ({isActive}) => (isActive ? "active" : "notActive")


    return (
        <div className="navegador">
            <div className="icono">
                <img src="https://cdn.icon-icons.com/icons2/41/PNG/128/pokemon_7025.png" alt="" />
            </div>
            <div className="links">
                <NavLink className={setActiveClass} to ="/">Home</NavLink>
                <NavLink className={setActiveClass} to= "/pokemones">Pokemones</NavLink>
             </div>
        </div>

    )
}