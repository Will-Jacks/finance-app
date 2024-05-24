const postBill = (bill)=> {

    const url = "http://localhost:8080/bills/save";
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bill)
        });
    } catch (e) {console.error(e)}
}


export default postBill;