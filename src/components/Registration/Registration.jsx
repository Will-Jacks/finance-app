import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css';
import'../Form/form.css';
import { baseUrl } from "../../context/LoginContext";
const Registration = ()=> {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const url = `${baseUrl}/users/save`
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, password, email, login})
            });
            if(response.ok) {
                alert('Usuário cadastrado com sucesso!');
            }else {
                const responseData = await response.text();
                alert(`Erro: ${responseData}`);
            }
        } catch (e) { console.error(e)}
        navigate('/')
    }

    return(
        <div className="login-container">
            <div className="border-wrapper">
                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit} className="form-login-container">
                    <label>Nome</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-input"/>
                
                    <label>Usuário</label>
                    <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)} className="form-input"/>
                    <label>Senha</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-input"/>
                
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-input"/>
                
                    <button type="submit" className="btn-submit-login">Cadastrar-se</button>
                </form>
            </div>
        </div>
    )
    
}

export default Registration;