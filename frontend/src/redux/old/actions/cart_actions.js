import {
    AddToCart,
    ClearCart,
    RemoveFromCart,
    UpdateInCart
} from '../types/cart_action_types';

function addItemToCart(id, name, imageURL, price, quantity, options) {
    return {
        type: AddToCart,
        id,
        name,
        imageURL,
        price,
        quantity,
        options
    };
}

function removeItemFromCart(id, options) {
    return {
        type: RemoveFromCart,
        id,
        options
    };
}

function updateItemInCart(id, name, imageURL, price, quantity, options) {
    return {
        type: UpdateInCart,
        id,
        name,
        imageURL,
        price,
        quantity,
        options
    };
}

function clearCart() {
    return { type: ClearCart };
}

export { addItemToCart, removeItemFromCart, updateItemInCart, clearCart };
