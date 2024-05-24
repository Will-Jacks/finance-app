const deleteBill = async (id) => {
    const url = `http://localhost:8080/bills/delete/${id}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error("Falha ao tentar excluir tarefa");
    } catch (e) {
        console.error('Error durante o delete: ', e);
    }
}

export default deleteBill;