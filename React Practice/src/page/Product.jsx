import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Product = () => {
    const userData = useContext(DataContext)
    return (
        <div>
            Product page {userData.userName}
        </div>
    )
}

export default Product
