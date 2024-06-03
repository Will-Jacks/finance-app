/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const baseUrl = "http://ec2-3-14-6-66.us-east-2.compute.amazonaws.com:8080";
export const LoginProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => {
        const data = localStorage.getItem('storage-user-id');
        return data ? data : '';
    });

/*
    Vou criar uma gambiarra com localStorage pra salvar o estado do userId na atualização de página, mas tenho que consertar no futuro ou para a criação da Bill refletir no React ou pra que haja uma maneira persistente de manter esse dado sem o localStorage
*/
    useEffect(() => {
        if (userId != null && userId != '' && userId != 0) {
            localStorage.setItem('storage-user-id', userId);
        }
    }, [userId]);


    return (
        <LoginContext.Provider value={{ userId, setUserId }}>
            {children}
        </LoginContext.Provider>
    )
}
