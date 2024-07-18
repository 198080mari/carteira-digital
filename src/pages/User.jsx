import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import logo from '../assets/logo.png';
import { userLogged } from '../services/user'; // Importar a função de serviço que obtém o usuário

export default function User() {
    const [user, setUser] = useState(null);
    const [apiErrors, setApiErrors] = useState(null);

    const navigate = useNavigate();

    async function getUserLogged() {
        try {
            const userResponse = await userLogged();
            setUser(userResponse.data);  // Adiciona dados ao usuário
        } catch (error) {
            console.log(error);
            setApiErrors(error.message);
        }
    }

    useEffect(() => {
        getUserLogged();
    }, []);

    return (
        <div>
            <Link to="/"><BiArrowBack className='text-white absolute top-3 left-3 text-2xl' /></Link>
            <img src={logo} alt="Logo" className="w-44"/> 
            <div className="m-100 text-5m text-white flex flex-col justify-center items-center bg-zinc-900 rounded p-8 w-hull h-full">
            {user ? (
                <>
                    <h1>Nome: {user.name}</h1>
                    <p>E-mail: {user.email}</p>
                </>
            ) : (
                <p>Carregando dados do usuário...</p>
            )}
            {apiErrors && <p className="error">{apiErrors}</p>}
        </div>
        </div>
    );
}
