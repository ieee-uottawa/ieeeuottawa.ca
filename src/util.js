const moneyFormatter = new Intl.NumberFormat('en-CA', { currency: 'CAD', style: 'currency' });

const capitalize = str => str.substring(0, 1).toUpperCase() + str.substring(1);

export { moneyFormatter, capitalize };
