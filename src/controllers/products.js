class ProductsControllers {
    get(req, res) {
        return res.send([{
            name: 'Default Product',
            description: 'product description',
            price: 100
        }]);
    }
}

export default ProductsControllers;