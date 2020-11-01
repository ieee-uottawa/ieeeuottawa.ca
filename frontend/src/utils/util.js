/* eslint-disable no-console */
import React from 'react';
import { Typography } from '../helpers/material-ui';

const isServerSideRendering = () => typeof window === 'undefined';

const { warn } = console;
export function logWarning(...warnings) {
    let showWarning = true;
    const filter = ['UNSAFE_', 'SourceMap', 'DevTools', 'release'];
    warnings.forEach(warning => {
        for (const item of filter)
            if (warning.includes(item)) showWarning = false;
    });
    if (showWarning) warn(...warnings);
}

console.warn = logWarning;

const isFacebookApp = () => {
    if (isServerSideRendering()) return false;
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

const renderUnsupportedBrowser = () => {
    return (
        isFacebookApp() && (
            <div style={{ textAlign: 'center', margin: '30px' }}>
                <Typography variant="h5" gutterBottom color="secondary">
                    Unsupported Browser
                </Typography>
                <Typography variant="h5" gutterBottom color="secondary">
                    Please open in another browser
                </Typography>
            </div>
        )
    );
};

const moneyFormatter = new Intl.NumberFormat('en-CA', {
    currency: 'CAD',
    style: 'currency'
});
const isDevEnvironment = process.env.NODE_ENV === 'development';

const capitalize = str => str.substring(0, 1).toUpperCase() + str.substring(1);

const flattenDeep = arr =>
    arr.reduce(
        (acc, val) =>
            Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
        []
    );

const showPricing = (pricing, formatter = moneyFormatter) =>
    pricing
        .map(({ quantity, price }) => {
            if (quantity === 1) return formatter.format(price);
            return `${quantity} for ${formatter.format(price)}`;
        })
        .join(' or ');

const calculatePrice = (price, qty) => {
    let quantity = qty;
    if (price.length === 1) return price[0].price * quantity;

    let total = 0;
    const filterPricing = ({ quantity: count }) => count <= quantity;
    const sortPricing = (a, b) => b.quantity - a.quantity;
    do {
        const { price: pricePer, quantity: quantityPer } = price
            .filter(filterPricing)
            .sort(sortPricing)[0];
        total += pricePer;
        quantity -= quantityPer;
    } while (quantity > 0);

    return total;
};

const vrformatName = name => {
    return name
        .replace('--', ': ')
        .replace('-', ' ')
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
};

const parseDateString = id => {
    const date_string = String(id)
        .split('-')
        .slice(0, 3)
        .join('-');
    return Date.parse(date_string);
};

const yesterdayDate = () => {
    const now = new Date();
    now.setDate(now.getDate() - 1);
    return now;
};

const isCurrentEvent = id => parseDateString(id) > yesterdayDate();
const isPastEvent = id => parseDateString(id) < yesterdayDate();

export {
    calculatePrice,
    capitalize,
    flattenDeep,
    isCurrentEvent,
    isDevEnvironment,
    isFacebookApp,
    isPastEvent,
    isServerSideRendering,
    renderUnsupportedBrowser,
    parseDateString,
    moneyFormatter,
    showPricing,
    vrformatName
};
