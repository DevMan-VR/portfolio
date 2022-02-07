import React, {createContext, useState} from 'react'

export const LanguageContext = createContext();


export default function LanguageProvider({children}){
    const [lang, setLang] = useState("spanish")

    return(
        <LanguageContext.Provider value={[lang, setLang]}>
            {children}
        </LanguageContext.Provider>
    )
}