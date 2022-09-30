import React, { createContext, useContext, useState } from 'react'

const initialValue = {
  productsListLayout: '',
  changeProductsListLayout: () => {},
}

const LayoutContext = createContext(initialValue)

export const LayoutProvider = ({ children }) => {
  const [productsListLayout, setProductsListLayout] = useState('grid') // for layout product list in products page
  const changeProductsListLayout = (layout) => setProductsListLayout(layout)

  const value = {
    productsListLayout,
    changeProductsListLayout,
  }

  return <LayoutContext.Provider value={value} children={children} />
}

export const useLayout = () => useContext(LayoutContext)
