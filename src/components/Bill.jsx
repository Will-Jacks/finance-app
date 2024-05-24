import { useEffect, useState } from "react";
import getBills from "../api/getBills";
import deleteBill from "../api/deleteBill";
import putBill from "../api/putBill";

/* eslint-disable react/prop-types */
const Bill = () => {

    const url = "http://localhost:8080/bills/all"; // Get
    const [dados, setDados] = useState([]);
    const [editingBill, setEditingBill] = useState(null);

    const renderBills = async () => {
        const data = await getBills(url);

        if (data) setDados(data)
    }

    useEffect(() => {
        renderBills();
    }, []);// PROBLEMA AQUI, QUANDO ADICIONA DADOS COMO DEPENDENCIA DO ARRAY ELE FICA MANDANDO REQUISIÇÕES PRO BACKEND EM LOOP  // Toda vez que houver uma adição ou uma exclusão de uma Bill será refletido na tela

    const handleClick = (id) => {
        console.log("Excluindo conta de ID: " + id);
        deleteBill(id);
    }

    const handleEditClick = (bill) => {
        setEditingBill(bill);
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingBill({
            ...editingBill,
            [name]: value
        });
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await putBill(editingBill);
        setEditingBill(null);
        renderBills();
    };


    return (
        <>
            {dados.length > 0 ? (
                <ul>
                    {dados.map((dado, index) => (
                        <li key={index}>
                            <h2>
                                {dado.title}
                                <button onClick={() => handleClick(dado.id)}>Excluir</button>
                                <button onClick={() => handleEditClick(dado)}>Editar</button> {/* Essa parte que eu quero implementar a lógica de edição */}
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

            {editingBill && (
                <form onSubmit={handleEditSubmit}>
                    <label>
                        Título:
                        <input
                            type="text"
                            name="title"
                            value={editingBill.title}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Valor:
                        <input
                            type="number"
                            name="value"
                            value={editingBill.value}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Descrição:
                        <input
                            type="text"
                            name="description"
                            value={editingBill.description}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Pago:
                        <select
                            name="isPaid"
                            value={editingBill.isPaid}
                            onChange={handleEditChange}
                        >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                    </label>
                    <button type="submit">Confirmar alterações</button>
                </form>
            )}
        </>
    )
}


export default Bill;