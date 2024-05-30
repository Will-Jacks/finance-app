import { baseUrl } from "../context/LoginContext";

const postBill = (bill, userID)=> {

    const url = `${baseUrl}/bills/save/${userID}`;
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