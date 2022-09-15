const filterCategory = (products, category) => {
    const filteredProducts = products.filter((product) => product.category === category);
    const newProducts = filteredProducts.map((product) => {
        return {
            id: product.id,
            brand: product.brand,
            title: product.name,
            price: product.price,
            rating: product.rating,
            image: product.images[0],
            inStock: product.inStock,
            link: `/products/${product.id}`
        }
    })
    return newProducts
}

export default filterCategory;