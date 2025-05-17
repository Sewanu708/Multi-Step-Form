import { createContext, useState } from "react";
export const myContext = createContext("")

export const GlobalState = ({children}) => {
    const [data, setData] = useState({
        location: '',
        Roles: '',
        Name: '',
        Phone: ''
    })
    return <myContext.Provider value={{data,setData} }>
        {children}
    </myContext.Provider>
}