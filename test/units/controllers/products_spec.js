import ProductsControllers from '../../../src/controllers/products';
import sinon from 'sinon';

describe('Controllers: products', () => {

    const defaultProduct = {
        name: 'Default Product',
        description: 'product description',
        price: 100
    };

    describe('get() Products', () => {
        it('Should return a list of products', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const productsControllers = new ProductsControllers();
            productsControllers.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultProduct)).to.be.true;
        });
    })
});