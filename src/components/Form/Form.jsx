/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState('');
    const [isPaid, setIsPaid] = useState(false);

    const handleSubmit = () => {
        const formData = {
            title,
            value,
            description,
            isPaid
        }
        onSubmit(formData);
    }

    return (
        <>
            <h1>Crie sua conta</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Título</label>
                <input type="text" placeholder="Título da sua conta" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="">Valor</label>
                <input type="number" placeholder="Valor da sua conta" value={value} onChange={(e) => setValue(e.target.value)} />

                <label htmlFor="">Descrição</label>
                <input type="text" placeholder="Descrição da sua conta" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label htmlFor="">Pago</label>
                <select value={isPaid} onChange={(e) => setIsPaid(e.target.value === "true")}>
                    <option value="false">Não</option>
                    <option value="true">Sim</option>
                </select>

                <button type="submit">Confirmar alterações</button>
            </form>
        </>
    )
}

export default Form;