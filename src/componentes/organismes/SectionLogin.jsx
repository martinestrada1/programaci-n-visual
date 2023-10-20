import {useState} from "react";
import Input from "../molecules/input";

function SectionLogin ()  {
    const [data, setData] = useState({username:'', password:''})

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlerChangeUsernamr = (e) => {
        setUsername(e.target.value);
    }
    return (
        <div>
            <input name="Username" title="Username" type="text"/>
            {/*<input name="Password" title="Password" type="Password"/>*/}
            <button onClick= {() => alert (username)}>Iniciar Sesion</button>
        </div>
    )
}

export default SectionLogin;