import { useEffect, useState } from "react";
import getBills from "../api/getBills";

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

    return (
        <>
            {dados.length > 0 ? (
                <ul>
                    {dados.map((dado, index) => (
                        <li key={index}>
                            <h2>
                                {dado.title}
                            </h2>
                            <h4>
                                {'R$: ' + dado.value}
                            </h4>
                            <h5>{dado.description}</h5>
                        </li>
                    ))}
                </ul>
            ) : (
                <p></p>
            )}
        </>
    )
}


export default Bill;