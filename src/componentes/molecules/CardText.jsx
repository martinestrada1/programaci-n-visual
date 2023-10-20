import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Link from "../atoms/Link";

function CardText({character}) {
    return ( 
        <div>
            <Title text={character.name}/>
            <ul>
                <li>
                    <Subtitle color="white" text={`${character.status}-${character.species}`}/>
                </li>
            </ul>
            <Subtitle text="Last known location:" color="Gray" />
            <Link text={character.location.name} link={character.location.url}/>
            <Subtitle text="First seen in:" color="white" />
            <Link text={character.origin.name} link={character.origin.url}/>
        </div>
     );
}

export default CardText;