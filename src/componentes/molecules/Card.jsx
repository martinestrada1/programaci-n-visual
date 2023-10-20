import styled from "styled-components";
import CardText from "./CardText";

const Div = styled.div`
    width: 30%;
    height: 200px; 
    background-color: gray;
    border-radius: 5px;
    display: flex;
`;

function Card({character}) {
    return (
        <Div>
            <img src={character.image} alt={character.name} style={{width:"45%"}}/>
            <CardText character={character}/>
        </Div>
      );
}

export default Card;