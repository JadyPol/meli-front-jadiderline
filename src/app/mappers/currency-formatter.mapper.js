const currency = require('currency-formatter');

// Use currency-formatter to create price template
module.exports.currencyFormatterMapper = (price, currencyCode, precision) => {
  const formatedPrice = currency.format(round(price, precision), {
    code: currencyCode,
    precision: precision,
    format: '%s%v'
  });
  return `${formatedPrice}`;
}

function round(value, decimalQuantity) {
  if (!!decimalQuantity) {
    const decimal = Math.pow(10, decimalQuantity);
    return value ? Math.round(value * decimal) / decimal : value;
  } else return parseInt(value?.toFixed(0))
}