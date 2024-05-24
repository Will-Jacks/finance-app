/* eslint-disable react/prop-types */
import { useState } from "react";

const EditBill = ({ bill, onSubmit }) => {
    const [title, setTitle] = useState(bill.title);
    const [value, setValue] = useState(bill.value);
    const [description, setDescription] = useState(bill.description);
    const [isPaid, setIsPaid] = useState(bill.isPaid);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id: bill.id, // Inclui o ID da conta para a atualização
            title,
            value,
            description,
            isPaid
        };
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="value">Valor</label>
            <input
                type="number"
                id="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <label htmlFor="description">Descrição</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="isPaid">Pago</label>
            <select
                id="isPaid"
                value={isPaid}
                onChange={(e) => setIsPaid(e.target.value === "true")}
            >
                <option value="false">Não</option>
                <option value="true">Sim</option>
            </select>

            <button type="submit">Salvar alterações</button>
        </form>
    );
}

export default EditBill;
