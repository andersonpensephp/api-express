describe('Routes: Products', () => {
    const defaultProduct = {
        name: 'Default Product',
        description: 'product description',
        price: 100
    };

    describe('Get /products', () => {
        it('should return a list of products', done => {
            request
            .get('/products')
            .end((err, res) => {
                expect(res.body[0]).to.eql(defaultProduct);

                done(err);
            })
        });
    });
});