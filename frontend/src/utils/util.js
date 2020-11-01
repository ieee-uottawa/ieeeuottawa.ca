import React from 'react';
import { Typography } from '../helpers/material-ui';

const isServerSideRendering = () => typeof window === 'undefined';

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

// const ArrayLikeToString = arg => Array.prototype.toString.call(arg);

// const getTextFeature = (text, color) => {
//     try {
//         const canvas = document.createElement('canvas');
//         canvas.width = 1;
//         canvas.height = 1;

//         const ctx = canvas.getContext('2d');
//         ctx.textBaseline = 'top';
//         ctx.font = '100px -no-font-family-here-';
//         ctx.fillStyle = color;
//         ctx.scale(0.01, 0.01);
//         ctx.fillText(text, 0, 0);

//         return ctx.getImageData(0, 0, 1, 1).data;
//     } catch (e) {
//         return false;
//     }
// };

// const compareFeatures = (feature1, feature2) => {
//     const feature1Str = ArrayLikeToString(feature1);
//     const feature2Str = ArrayLikeToString(feature2);
//     return feature1Str === feature2Str && feature1Str !== '0,0,0,0';
// };

// const isEmojiSupported = text => {
//     const feature1 = getTextFeature(text, '#000');
//     const feature2 = getTextFeature(text, '#fff');
//     return feature1 && feature2 && compareFeatures(feature1, feature2);
// };

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

export {
    calculatePrice,
    capitalize,
    flattenDeep,
    isDevEnvironment,
    isFacebookApp,
    isServerSideRendering,
    renderUnsupportedBrowser,
    moneyFormatter,
    showPricing,
    vrformatName
};
