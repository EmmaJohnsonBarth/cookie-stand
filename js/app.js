'use strict'

console.log('js is connected.')

const seattleShop = {
    minCustHr: 23,
    maxCustHr: 65,
    avgCookiePerSale: 6.3,
    randomCustPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const tokyoShop = {
    minCustHr: 3,
    maxCustHr: 24,
    avgCookiePerSale: 1.2,
    randomCustPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const dubaiShop = {
    minCustHr: 11,
    maxCustHr: 38,
    avgCookiePerSale: 3.7,
    randomCustPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const parisShop = {
    minCustHr: 20,
    maxCustHr: 38,
    avgCookiePerSale: 2.3,
    randomCustPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};

const limaShop = {
    minCustHr: 2,
    maxCustHr: 16,
    avgCookiePerSale: 4.6,
    randomCustPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
    },
    cookiesPerHourArr: [],
};








function populateArray(shop, hoursOpen) {
    for (let i = 0; i < hoursOpen - 1; i++) {
        shop.cookiesPerHourArr.push(shop.randomCustPerHour())
    }
}

populateArray(seattleShop, 14);

console.log(seattleShop.cookiesPerHourArr)

function populateHourlyUl(shop, city) {
    // Create an "li" node:
    const node = document.createElement("li");
    // Create a text node:
    const textnode = document.createTextNode(shop.randomCustPerHour());
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    // Append the "li" node to the list:
    document.getElementById("city").appendChild(node);
}
 populateHourlyUl(seattleShop);



// let petUl = document.createElement('ul');
// article.appendChild(petUl);
// //                object.array go through the whole array
// for(let i = 0; i < petOne.intertests.length; i++){
//   let petLi = document.createElement('li');
//   petLi.textContent = petOne.intertests[i];
//   petUl.appendChild(petLi);
// }

//petUl -> 
//petOne -> 
//petLi ->
