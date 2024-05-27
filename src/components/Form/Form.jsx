/* eslint-disable react/prop-types */
import { useState } from "react";
import postBill from "../../api/postBill";
import './form.css';
const Form = () => {
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
        postBill(formData, 1); // Vai ter que implementar uma lógica que ao logar, o ID do usuário venha pra cá
    }

    return (
        <>
            <h1>Crie sua conta</h1>

            <form onSubmit={handleSubmit} className="form-container">
                <div className="field-wrapper">
                    <label htmlFor="">Título</label>
                    <input type="text" placeholder="Título da sua conta" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="">Valor</label>
                    <input type="number" placeholder="Valor da sua conta" value={value} onChange={(e) => setValue(e.target.value)} />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Descrição da sua conta" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="">Pago</label>
                    <select value={isPaid} onChange={(e) => setIsPaid(e.target.value)} className="select-input">
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                    </select>
                </div>

                <button type="submit" className="btn-submit">Confirmar alterações</button>
            </form>
        </>
    )
}

export default Form;