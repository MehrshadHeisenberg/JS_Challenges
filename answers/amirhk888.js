"use strict";

const calcTotalPrice = (items, taxRate, discount) => {
    let total = items.reduce((total, item) => total + ((item?.quantity) * (item?.price)) * (1 + (parseFloat(taxRate)/100)) * (1 - (parseFloat(discount)/100)), 0);
    total = total.toFixed(1);
    return total;
}

module.exports = calcTotalPrice;
