import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const { 
    query : { productId },  
  } = useRouter();

  return (
    <div>Pagina de productos: {productId}</div>
  )
}

export default ProductItem