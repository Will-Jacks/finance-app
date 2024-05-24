import { useEffect, useState } from "react";
import getBills from "../api/getBills";
import deleteBill from "../api/deleteBill";

/* eslint-disable react/prop-types */
const Bill = () => {

    const url = "http://localhost:8080/bills/all"; // Get
    const [dados, setDados] = useState([]);

    const renderBills = async () => {
        const data = await getBills(url);

        if (data) setDados(data)
    }

    useEffect(()=> {
        renderBills();
    }, []);

    const handleClick = (id)=> {
        console.log("Excluindo conta de ID: " + id);
        deleteBill(id);
    }

    return (
        <>
            {dados.length > 0 ? (
                <ul>
                    {dados.map((dado, index) => (
                        <li key={index}>
                            <h2>
                                {dado.title}
                                <button onClick={()=> handleClick(dado.id)}>Excluir</button>
                            </h2>
                            <h4>
                                {'R$: ' + dado.value}
                            </h4>
                            <h5>{dado.description}</h5>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma conta a ser exibida no momento</p>
            )}
        </>
    )
}


export default Bill;