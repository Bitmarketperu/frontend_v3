import React, { createContext } from 'react'

export const DataContext = createContext()
export const DataProvider = ({ children }) => {
    /* funciones y logica*/
    const _context = {
        //varibles
    }

    return (
        <DataContext.Provider value={_context}>
            {children}
        </DataContext.Provider>
    )
}