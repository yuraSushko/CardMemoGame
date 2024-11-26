import React, {createContext, useState} from "react";

export const CardNumContext = createContext();
export const CardNumProvider = ({ children }) => {
    const [cardNum, setCardNum] = useState(0);

    return (
        <CardNumContext.Provider value={{ cardNum, setCardNum }}>
            {children}
        </CardNumContext.Provider>
    );
};