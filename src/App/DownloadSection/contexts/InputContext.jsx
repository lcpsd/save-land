import { createContext, useContext, useState } from "react";

export const InputContext = createContext()

export function InputContextProvider({children}){

    const [link, setLink] = useState("")
    const [downloadLinks, setDownloadLinks] = useState("")
    const [loading, setLoading] = useState(false)

    return(
        <InputContext.Provider value={{
            link,
            setLink,
            downloadLinks,
            setDownloadLinks,
            loading,
            setLoading
            }}>
            {children}
        </InputContext.Provider>
    )
}

export function useInputContext(){
    return useContext(InputContext)
}