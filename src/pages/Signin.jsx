import logo from '../assets/logo.png';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorInput from '../components/ErrorInput';
import { signinSchema } from '../schemas/SigninSchema';
import { signin } from '../services/user';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export default function Signin() {
    const {register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(signinSchema) });
    const navigate = useNavigate();
    const [apiErrors, setApiErrors] = useState("");  //mostra se der erro no back

    async function handleSubmitForm(data) {
        try {
            const token = await signin(data); 
            Cookies.set("token", token.data, { expires: 1 });  //add token do back num cookie pra salvar, se colocar .data imprime só ele, token expira no back em 1 dia, e agora no cookie tb
            navigate("/");    //depois do tokeen navega 
        } catch (error) {
                    console.log(error.message);  //message devolve mensagem de erro ao invés do número
                    setApiErrors(error.message);  
                }
            }

    useEffect(() => {
        Cookies.remove("token");  //imprede usuario de voltar sem logar
    }, []);

    //jsx retorna em html
    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">  
        <img src={logo} alt="" className="w-44" />
        {apiErrors && <ErrorInput text={apiErrors} />}  
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
            <Input type="email" placeholder="Email" register={register} name="email" />
            {errors.email && <ErrorInput text={errors.email.message} />}  
            <Input type="password" placeholder="Password" register={register} name="password" />
            {errors.password && <ErrorInput text={errors.password.message} />}  
            <Button type="submit" text="SIGNIN" />
            </form>
            <p className="text-white text-2xl">Don't you have an account? <Link to="/signup" className='text-sky-400 hover:text-sky-600'>Register</Link>{" "}</p>
        </div>
    )
}

//p de padding, full de 100%