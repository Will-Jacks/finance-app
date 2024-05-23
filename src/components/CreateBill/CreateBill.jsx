/* import { useState } from "react"; */
import Form from "../Form/Form";

const CreateBill = () => {

    const url = "http://localhost:8080/bills/save"

    /* Responsável pela parte de criar pelo método POST a conta no banco de dados */
    const handleFormSubmit = async (formData)=> {
        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)

            })
        } catch(e) { console.error(e)}
        console.log("Dados do formulário submetidos: ", formData);
    }
    return (
        <>
            <Form onSubmit={handleFormSubmit}/> {/* Usa recursividade para pegar os parâmetros que são criados no Form (Não entendi muito bem essa parte) */}
        </>
    );
}

export default CreateBill;