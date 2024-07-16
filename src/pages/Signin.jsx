import logo from '../assets/logo.png';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Signin() {
    //const 

    //jsx retorna em html
    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">  
        <img src={logo} alt="" className="w-44" />
        <form className="flex flex-col justify-center gap-4 w-full text-2xl">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" text="SIGNIN" />
            </form>
            <p className="text-white text-2xl">Don't you have an account? Register</p>
        </div>
    )
}

//p de padding, full de 100%