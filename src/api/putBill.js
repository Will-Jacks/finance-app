const putBill = async (bill, billId) => {
    const url = `http://192.168.0.19:8080/bills/update/${billId}`; // ID da bill que vai ser alterada

    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bill),
    }).catch((e) => console.error(e));
};

export default putBill;
