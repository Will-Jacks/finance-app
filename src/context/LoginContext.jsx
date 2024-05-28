/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LoginContext = createContext();


export const LoginProvider = ({children}) => {
    const [userId, setUserId] = useState('');


    return(
        <LoginContext.Provider value={{userId, setUserId}}>
            {children}
        </LoginContext.Provider>
    )
}
