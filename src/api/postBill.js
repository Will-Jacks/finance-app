const postBill = (bill, userID)=> {

    const url = `http://192.168.0.19:8080/bills/save/${userID}`;
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