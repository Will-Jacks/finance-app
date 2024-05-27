const postBill = (bill)=> {

    const url = "http://192.168.0.19:3000/bills/save";
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