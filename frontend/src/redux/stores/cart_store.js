/* eslint-disable no-console */
import { createStore } from 'redux';

import cart from '../old/reducers/cart_reducers';
import {
    addItemToCart,
    removeItemFromCart,
    updateItemInCart
} from '../old/actions/cart_actions';

const store = createStore(cart);

console.log(store.getState());

// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(
    addItemToCart(5, 3, {
        size: 'L',
        colour: 'Black'
    })
);
store.dispatch(
    addItemToCart(3, 2, {
        size: 'M',
        colour: 'Blue'
    })
);
store.dispatch(
    addItemToCart(9, 4, {
        size: 'XL',
        colour: 'Maroon'
    })
);
store.dispatch(removeItemFromCart(3));
store.dispatch(removeItemFromCart(10));
store.dispatch(
    updateItemInCart(5, 2, {
        size: 'M',
        colour: 'Black'
    })
);

unsubscribe();
