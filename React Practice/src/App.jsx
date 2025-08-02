import React, { useContext } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Contact, Product } from './page/index'
import { DataContext } from './context/UserContext'

const App = () => {
    const data = useContext(DataContext)
    console.log(data);

    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </>
    )
}

export default App