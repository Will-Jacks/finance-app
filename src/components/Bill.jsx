import { useEffect, useState } from "react";
import getBills from "../api/getBills";
import deleteBill from "../api/deleteBill";
import EditBill from "./EditBill/EditBill";

/* eslint-disable react/prop-types */
const Bill = () => {

    const url = "http://localhost:8080/bills/all"; // Get
    const [dados, setDados] = useState([]);
    const [editingBill, setEditingBill] = useState(null);

    const renderBills = async () => {
        const data = await getBills(url);

        if (data) setDados(data)
    }

    useEffect(()=> {
        renderBills();
    }, [dados]);

    const handleDeleteClick = (id)=> {
        console.log("Excluindo conta de ID: " + id);
        deleteBill(id);
        
    }

    const handleEditClick =( bill ) => {
        setEditingBill(bill);
    }

    const handleEditSubmit = async (formData) => {
        const url = "http://localhost:8080/bills/update";

        try {
            await fetch(url, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            setEditingBill(null);
        } catch (e) {console.error("Erro ao atualizar lista: ", e)}
    }

     return (
        <>
            {editingBill ? (
                <EditBill bill={editingBill} onSubmit={handleEditSubmit} />
            ) : (
                <div>
                    {dados.length > 0 ? (
                        <ul>
                            {dados.map((dado, index) => (
                                <li key={index}>
                                    <h2>
                                        {dado.title}
                                        <button onClick={() => handleDeleteClick(dado.id)}>Excluir</button>
                                        <button onClick={() => handleEditClick(dado)}>Editar</button>
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
                </div>
            )}
        </>
    );
}


export default Bill;