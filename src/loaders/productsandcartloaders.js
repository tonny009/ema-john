import { getStoredCart } from "../utilities/fakedb";

export const productsandcartloaders = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const previousCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);

        }
    }

    return { products, previousCart }; //where this return value will get they will get it as object ,,so by destructuring we can access these two return values

}