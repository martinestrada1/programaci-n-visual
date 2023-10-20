import {useState} from 'react'

function App() {
    const [email,setEmail] = useState('');
    const [error, setError] = useState(null);
    const [validationResult, setValidationResult] = useState('');

    const validateEmail = (email) => {
    const emailpattern = /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailpattern.test(email);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setValidationResult('');

        if (!validateEmail(newEmail)){
            setError('Correo electronico no valido');
            }else{
                setError(null);
        }
    }

    const handlerValidationClick = () => {
        if (validateEmail(email)) {
            setValidationResult('Es un correo electronico valido');
           }else{
            setValidationResult('No es un correo electronico valido');
        }
    };
    return(
        <form>
     <label htmlFor='nombre'>Nombre</label>
     <input type='text' id='nombre' name='nombre'/>

     <label htmlFor='correo'>COrreo</label>
     <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={handleEmailChange}
     />

     <button onClick={handlerValidationClick}>Validar Correo</button>
     <p>{validationResult}</p>

     <label htmlFor='password'>Contraseña</label>
     <input type='password' id='password' name='password'/>

     <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
     <input type='password' id='confirmPassword' name='confirmPassword'/>


 </form>
    )
}

export default App;