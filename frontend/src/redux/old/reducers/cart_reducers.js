import {
    AddToCart,
    ClearCart,
    RemoveFromCart,
    UpdateInCart,
} from '../types/cart_action_types';

// TODO: If state grows to more than items, apply reducer composition pattern

const initialState = {
    items: [],
};

function updateOrAdd(state, { id, name, imageURL, price, quantity, options }) {
    const index = state.items.findIndex(
        ({ id: productID }) => id === productID
    );
    let item = {
        id,
        name,
        imageURL,
        price,
        options: [
            {
                ...options,
                quantity,
            },
        ],
    };

    if (index > -1) {
        item = JSON.parse(JSON.stringify(state.items[index])); // TODO: Verify if there will ever be an edge case of performance issues
        const optionIndex = item.options.findIndex(
            ({ size, colour }) =>
                size === options.size && colour === options.colour
        );
        if (optionIndex > -1) {
            item.options[optionIndex].quantity += quantity;
        } else {
            item.options.push({
                ...options,
                quantity,
            });
        }

        return Object.assign({}, state, {
            items: [
                ...state.items.slice(0, index),
                item,
                ...state.items.slice(index + 1),
            ],
        });
    }

    return Object.assign({}, state, {
        items: [...state.items, item],
    });
}

function remove(state, { id, options }) {
    const index = state.items.findIndex(
        ({ id: productID }) => id === productID
    );
    if (index === -1) return state;

    const item = JSON.parse(JSON.stringify(state.items[index]));
    const optionsIndex = item.options.findIndex((option) =>
        Object.keys(option).some(
            (key) =>
                Object.prototype.hasOwnProperty.call(options, key) &&
                option[key] === options[key]
        )
    );

    if (item.options.length > 1) {
        if (optionsIndex > -1) {
            item.options = [
                ...item.options.slice(0, optionsIndex),
                ...item.options.slice(optionsIndex + 1),
            ];
        }
        return Object.assign({}, state, {
            items: [
                ...state.items.slice(0, index),
                item,
                ...state.items.slice(index + 1),
            ],
        });
    }
    return Object.assign({}, state, {
        items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1),
        ],
    });
}

function cart(state = initialState, action) {
    const { id, type } = action;

    if (type === AddToCart) {
        return updateOrAdd(state, action);
    }
    if (type === UpdateInCart) {
        const index = state.items.findIndex(
            ({ id: productID }) => id === productID
        );

        if (index === -1) return state;
        return updateOrAdd(state, action);
    }
    if (type === RemoveFromCart) {
        return remove(state, action);
    }
    if (type === ClearCart) {
        return Object.assign({}, state, { items: [] });
    }

    return state;
}

export default cart;
