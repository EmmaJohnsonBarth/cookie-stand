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
populateArray(tokyoShop, 14);
populateArray(dubaiShop, 14);
populateArray(parisShop, 14);
populateArray(limaShop, 14);

console.log("seattle cookies per hour: " + seattleShop.cookiesPerHourArr)
console.log("tokyp cookies per hour: " + tokyoShop.cookiesPerHourArr)
console.log("dubai cookies per hour: " + dubaiShop.cookiesPerHourArr)
console.log("paris cookies per hour: " + parisShop.cookiesPerHourArr)
console.log("lima cookies per hour: " + limaShop.cookiesPerHourArr)

// function populateHourlyUl(shop) {
//     // Create an "li" node:
//     const node = document.createElement("li");
//     // Create a text node:
//     const textnode = document.createTextNode(shop.randomCustPerHour());
//     // Append the text node to the "li" node:
//     node.appendChild(textnode);
//     // Append the "li" node to the list:
//     document.getElementById("city").appendChild(node);
// }
//  populateHourlyUl(seattleShop);


function populateHourlyUl(shop) {
    let hourlyList = document.createElement('ul');
    article.appendChild(hourlyList);
    for (let i = 0; shop.cookiesPerHourArr.length; i++) {
        let hour = document.createElement('li');
        hour.textContent = shop.cookiesPerHourArr[i];
        hourlyList.appendChild(hour)
    }
}
// let petUl = document.createElement('ul');
// article.appendChild(petUl);
// for(let i = 0; i < petOne.intertests.length; i++){
//   let petLi = document.createElement('li');
//   petLi.textContent = petOne.intertests[i];
//   petUl.appendChild(petLi);
// }

//petUl -> 
//petOne -> seattleShop
//petLi -> customersperhour
