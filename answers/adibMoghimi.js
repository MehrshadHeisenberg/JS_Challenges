"use strict";

const arr1 = [1, 2, 3, 4, 5, 6, -7, 8, 9];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [7, 77, 777, 7777];

const findSeven = (arr) => (String(arr).includes("7") ? 7 : -1);
console.log(findSeven(arr1));

const find7 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes("7")) {
      return arr[i];
    }
  }
  return -1;
};
console.log(find7(arr2));

// من فعلا در خصوص مورد زیر آموزش ندیدم و
// در آینده سعی می‌کنم بر اساس 7 مرحله بیان شده، مشارکت داشته باشم

//  تابع را با استفاده از
//  module.exports
// صادر کنید.

// برای پاسخ چالش، دو راه حل نوشتم
