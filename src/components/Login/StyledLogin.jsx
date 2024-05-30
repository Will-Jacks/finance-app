import { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { Navigate } from 'react-router-dom';


function StyledLogin() {

    const { setUserId } = useContext(LoginContext);

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
        <MDBContainer fluid className="p-3 my-5">
            {responseOk && (
                <Navigate to={'/main'} />
            )}

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>


                    <form onSubmit={handleSubmit}>
                        <MDBInput wrapperClass='mb-4' label='Usuário' id='formControlLgUser' type='text' size="lg" value={login} onChange={(e)=> setLogin(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Senha' id='formControlPswrd' type='password' size="lg" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <a href="!#">Esqueceu a senha?</a>
                        </div>
                        <MDBBtn className="mb-4 w-100" size="lg" type='submit'>Entrar</MDBBtn>
                    </form>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default StyledLogin;