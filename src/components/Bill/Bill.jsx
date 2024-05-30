import { useEffect, useState } from "react";
import getBills from "../../api/getBills";
import deleteBill from "../../api/deleteBill";
import putBill from "../../api/putBill";
import './bill.css';
import '../Form/form.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../context/LoginContext";


/* eslint-disable react/prop-types */
const Bill = (props) => {

    const url = `${baseUrl}/bills/${props.url}`; // Get
    const [dados, setDados] = useState([]);
    const [editingBill, setEditingBill] = useState(null);

    const renderBills = async () => {
        const data = await getBills(url);  

        if (data) setDados(data)
    }

    useEffect(() => {
        renderBills();
    }, []);

    const handleDeleteBill = async(id) => {
        console.log("Excluindo conta de ID: " + id);
        await deleteBill(id);
        renderBills();
    }

    const handleEditClick = (bill) => {
        setEditingBill(bill); //Exibe o form oculto
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingBill({
            ...editingBill,
            [name]: value,
            user: {
                id: props.url // Altera a bill do usuário usando o ID do props
            }
        });
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await putBill(editingBill, editingBill.id); // Aqui tem que ser o ID da Bill
        setEditingBill(null);
        renderBills();
    };


    return (
        <div className="container-bills">
            {dados.length > 0 ? (
                <>
                    {dados.map((dado, index) => (
                        <div key={index} className="bill-element">
                            <div className="wrap-title-buttons">
                                <h2>{dado.title}</h2>
                                <div className="container-icons-edit-trash">

                                    <button onClick={() => handleEditClick(dado)} className="buttons-edit-trash edit"><FontAwesomeIcon icon={faPencil} size="xl" style={{color: "#B197FC"}}/></button>
                                    <button onClick={() => handleDeleteBill(dado.id)} className="buttons-edit-trash trash"><FontAwesomeIcon icon={faTrash}  size="xl" style={{color: "#B197FC"}}/></button>
                                </div>

                            </div>

                            <h4>
                                {'R$: ' + dado.value}
                            </h4>
                            <h5>{dado.description}</h5>
                        </div>
                    ))}
                </>
            ) : (
                <p>Nenhuma conta a ser exibida no momento</p>
            )}

            {editingBill && (
                <form onSubmit={handleEditSubmit} className="form-container">

                    <div className="field-wrapper">
                        <label>
                            Título:
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={editingBill.title}
                            onChange={handleEditChange}
                        />
                    </div>

                    <div className="field-wrapper">
                        <label>
                            Valor:

                        </label>
                        <input
                            type="number"
                            name="value"
                            value={editingBill.value}
                            onChange={handleEditChange}
                        />
                    </div>

                    <div className="field-wrapper">
                        <label>
                            Descrição:

                        </label>
                        <input
                            type="text"
                            name="description"
                            value={editingBill.description}
                            onChange={handleEditChange}
                        />
                    </div>

                    <div className="field-wrapper">
                        <label>
                            Pago:

                        </label>
                        <select
                            name="isPaid"
                            value={editingBill.isPaid}
                            onChange={handleEditChange}
                            className="select-input"
                        >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-submit">Confirmar alterações</button>
                </form>
            )}
        </div>
    )
}


export default Bill;