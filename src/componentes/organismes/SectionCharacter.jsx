import { useState } from "react";
import Card from "../molecules/Card";


function SectionCharacter() {
    const [character, setCharacter] = useState(null)
    /* const character = {
        name: "Rick Sanchez",
        status:"Alive",
        species:"Human",
        origin : {
            name:"Earth (C-137)",
            url:"https://rickandmortyapi.com/api/location/1"
        },
        location:{
            name:"Citadel of Ricks",
            url:"https://rickandmortyapi.com/api/location/3"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }; */
    const url = "https://rickandmortyapi.com/api/character";
    const handlerClick = () => {
        fetch(url).
            then( response => {
                console.log("Response:", response);
                if (response.ok)
                    return response.json()
                else
                    alert("Error en la conexión a la API")
            }).
            then(data => {
                console.log("Data: ",data)
                setCharacter(data)
                //console.log(data);
            }).catch(err=> {
                console.log("Error", err)
            })
    }

    return (
        <div>
            <button onClick={handlerClick}>Cargar Productos</button>
            {
                character && character.results.map(dato => 
                     <Card character={dato} />
                )
            }
        </div>        
      );
}

export default SectionCharacter;