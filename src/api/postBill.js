import { baseUrl } from "../context/LoginContext";

const postBill = async (bill, userID)=> {

    const url = `${baseUrl}/bills/save/${userID}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bill)
        });

        if(response.ok) return true;
    } catch (e) {console.error(e)}
}


export default postBill;