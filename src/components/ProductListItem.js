import React from 'react'

const ProductListItem = ({ product }) => {
    const { title, description, price } = product
    return (
        <>
            <p>Nom produit: {title}</p>
            <p>Description: {description}</p>
            <p>Prix: {price}</p>
        </>
    )
}

export default ProductListItem