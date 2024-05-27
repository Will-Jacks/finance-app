import { useState } from "react";
import getBills from "../../api/getBills";

const SumBills = () => {
    const [totalBillValue, setTotalBillValue] = useState(0);

    const url = "http://192.168.0.19:3000/bills/all";
    const response = async () => {
        const data = await getBills(url);
        const totalValue = data.reduce((accumulator, currentBill) => {
            return accumulator + currentBill.value;
        }, 0);

        setTotalBillValue(totalValue);
    }
    response();
    return (
        <>
            <h2>Total: {totalBillValue}</h2>
        </>
    )
}

export default SumBills;