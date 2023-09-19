'use strict';

console.log('app2.js is connected.');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shop(cityName, minCustHr, maxCustHr, avgCookiesPerSale) {
    this.cityName = cityName;
    this.minCustHr = minCustHr;
    this.maxCustHr = maxCustHr;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.dailyCookies = 0;
}

const seattleShop = new Shop("Seattle", 23, 65, 6.3);
const tokyoShop = new Shop("Tokyo", 3, 24, 1.2);
const dubaiShop = new Shop("Dubai", 11, 38, 3.7);
const parisShop = new Shop("Paris", 20, 38, 2.3);
const limaShop = new Shop("Lima", 2, 16, 4.6);

function randomCustPerHour(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function populateArray(shop, min, max) {
    for (let i = 0; i < hours.length; i++) {
        shop.customersEachHour.push(randomCustPerHour(min, max))
    }
}

populateArray(seattleShop, seattleShop.minCustHr, seattleShop.maxCustHr);
populateArray(tokyoShop, tokyoShop.minCustHr, tokyoShop.maxCustHr);
populateArray(dubaiShop, dubaiShop.minCustHr, dubaiShop.maxCustHr);
populateArray(parisShop, parisShop.minCustHr, parisShop.maxCustHr);
populateArray(limaShop, limaShop.minCustHr, limaShop.maxCustHr);

console.log(seattleShop, tokyoShop, dubaiShop, parisShop, limaShop)

//5.Replace the lists of your data for each store

//6. and build a single table of data instead

//7. Break each column by the hour and complete each row with a "Daily Location Total".

//8.Each cookie stand location should have a separate render() method that creates and appends its row to the table

//9.The header row and footer row are each created in their own stand-alone function