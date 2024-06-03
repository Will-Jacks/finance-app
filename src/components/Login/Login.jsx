import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginContext, baseUrl } from "../../context/LoginContext";
import './login.css';
const Login = () => {
    const { setUserId } = useContext(LoginContext);
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [responseOk, setResponseOk] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${baseUrl}/users/login`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password })
            });
            if (response.ok) {
                const responseData = await response.text();
                await setUserId(responseData);
                console.log(responseData);//Quero exibir o retorno aqui
                setResponseOk(true); // Chama o Navigate do Routes no jsx
            }
        } catch (e) {
            console.error("Erro na requisição" + e);
        }
    }

    const handleNavigate = () => {
        navigate("/register")
    }


    return (
        <div className="login-container">
            <div className="border-wrapper">
                <h1 className="login-title">Login</h1>
                <p className="form-descripition">Entre com o login e senha</p>
                {responseOk && (
                    <Navigate to={'/main'} />
                )}
                <form onSubmit={handleSubmit} className="form-login-container">
                    <div className="wrapper-form-label-input">
                        <label className="user-label form-label">Usuário</label>
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            className="user-input form-input"
                            autoCapitalize="none"
                            autoCorrect="off"
                            spellCheck="false"
                            inputMode="username"
                            />
                    </div>
                    <div className="wrapper-form-label-input">
                        <label className="password-label form-label">Senha</label>
                        <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className="password-input form-input" />
                    </div>
                    <p>Não possui conta?<a onClick={() => handleNavigate()} className="register">Cadastre-se</a></p>
                    <button type="submit" className="btn-submit-login"><strong>Entrar</strong></button>
                </form>
            </div>
        </div>
    )
}

export default Login;