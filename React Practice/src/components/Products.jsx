import React from 'react'

const Products = (props) => {
    return (
        <div className='text-white mt-4 p-3 rounded-lg bg-zinc-800 flex '>
            <h1>
                product = {props.count}
            </h1>
        </div>
    )
}

export default Products
