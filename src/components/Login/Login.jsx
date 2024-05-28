import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
    const { setUserId} = useContext(LoginContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [responseOk, setResponseOk] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://192.168.0.19:8080/users/login";
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login, password})
            });
            if(response.ok) {
                const responseData = await response.text();
                await setUserId(responseData);
                console.log(responseData);//Quero exibir o retorno aqui
                setResponseOk(true); // Chama o Navigate do Routes no jsx
            }
        } catch(e) {
            console.error("Erro na requisição" + e);
        }
    }


    return (
        <>
            <h1>Login</h1>
            {responseOk && (
                <Navigate to={'/main'} />
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Usuário</label>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />

                <label htmlFor="">Senha</label>
                <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Login;