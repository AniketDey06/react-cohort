import React from 'react'
import { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({ children }) => {
    const userData = {
        userName: 'Aniket Dey',
        age: 69,
        city: "Kolkata"
    }

    return (
        <div>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext
