'use strict'

console.log('js is connected.')

const seattleShop = {
    minCustHr: 23,
    maxCustHr: 65,
    avgCookiePerSale: 6.3,
    randomCustPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [];
};

const tokyoShop = {
    minCustHr: 3,
    maxCustHr: 24,
    avgCookiePerSale: 1.2,
    randomCustPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const dubaiShop = {
    minCustHr: 11,
    maxCustHr: 38,
    avgCookiePerSale: 3.7,
    randomCustPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const parisShop = {
    minCustHr: 20,
    maxCustHr: 38,
    avgCookiePerSale: 2.3,
    randomCustPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const limaShop = {
    minCustHr: 2,
    maxCustHr: 16,
    avgCookiePerSale: 4.6,
    randomCustPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};