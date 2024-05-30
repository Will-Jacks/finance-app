import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/');
    }
    return (
        <>
            <h1 style={
                {
                    display: 'flex',
                    justifyContent:'center'
                }
            }>
                Contas
            </h1>
            <button onClick={()=> handleClick()}> Sair</button>
        </>
    )
}


export default Header;