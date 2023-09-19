'use strict';

console.log('js is connected.');

const seattleShop = {
  //property attribute... key: value pair.......
  cityName: 'Seattle',
  //our keys' data type is a string... bracket notation
  minCustHr: 23,
  maxCustHr: 65,
  //key           : value
  avgCookiePerSale: 6.3,
  hoursOpen: 14,
  cookiesSold: 0,
  //name/key            anonymous function....
  randomCustPerHour: function () {
    //contextual this     it refers to an instance of an object
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },
  cookiesPerHourArr: [],
};

const tokyoShop = {
  cityName: 'Tokyo',
  minCustHr: 3,
  maxCustHr: 24,
  avgCookiePerSale: 1.2,
  hoursOpen: 14,
  cookiesSold: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },
  cookiesPerHourArr: [],
};

const dubaiShop = {
  cityName: 'Dubai',
  minCustHr: 11,
  maxCustHr: 38,
  avgCookiePerSale: 3.7,
  hoursOpen: 14,
  cookiesSold: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },
  cookiesPerHourArr: [],
};

const parisShop = {
  cityName: 'Paris',
  minCustHr: 20,
  maxCustHr: 38,
  avgCookiePerSale: 2.3,
  hoursOpen: 14,
  cookiesSold: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },
  cookiesPerHourArr: [],
};

const limaShop = {
  cityName: 'Lima',
  minCustHr: 2,
  maxCustHr: 16,
  avgCookiePerSale: 4.6,
  hoursOpen: 14,
  cookiesSold: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },
  cookiesPerHourArr: [],
};

function populateArray(shop) {
//   console.log('shop objects:', shop);
  for (let i = 0; i < 13; i++) {

    shop.cookiesPerHourArr.push(shop.randomCustPerHour());
    // shop.cookiesSold += shop.cookiesPerHour[i]
  }
}

populateArray(seattleShop);
populateArray(tokyoShop);
populateArray(dubaiShop);
populateArray(parisShop);
populateArray(limaShop);

// console.log('seattle cookies per hour: ' + seattleShop.cookiesPerHourArr);
// console.log('tokyp cookies per hour: ' + tokyoShop.cookiesPerHourArr);
// console.log('dubai cookies per hour: ' + dubaiShop.cookiesPerHourArr);
// console.log('paris cookies per hour: ' + parisShop.cookiesPerHourArr);
// console.log('lima cookies per hour: ' + limaShop.cookiesPerHourArr);

// function populateHourlyUl(shop) {
//     const node = document.createElement("li");
//     const textnode = document.createTextNode(shop.randomCustPerHour());
//     node.appendChild(textnode);
//     document.getElementById("city").appendChild(node);
// }
//  populateHourlyUl(seattleShop);


// function populateHourlyUl(shop) {
//     const nodeTitle = document.createElement('title')
//     const nodeCity = document.createTextNode(shop)
//     for (let i = 0; i < 13; i++) {
//         const node = document.createElement('li');
//         const textNode = document.createTextNode(shop.cookiesPerHourArr[i]);
//         node.appendChild(textNode);
//         document.getElementById("city").appendChild(node)
//     }
// }

function populateHourlyUl(shop) {
  // document.title(shop);
  const header = document.createElement('h2');
  console.log('h2: ',header);
  console.log('object',shop.cityName);
  header.textContent = shop.cityName;

  const cityList = document.getElementById('city');
  cityList.appendChild(header);
  for (let i = 0; i < shop.hoursOpen -1; i++) {
    console.log(shop.hoursOpen - 1);
    const node = document.createElement('li');
    node.textContent = `${i + 6}:00 ${shop.cookiesPerHourArr[i]} cookies`;
    cityList.appendChild(node);
  }
  const totalNode = document.createElement('li');
  // totalNode.textContent(`Total: ${shop.cookiesSold} cookies`);
  cityList.appendChild(totalNode);
}

populateHourlyUl(seattleShop);

populateHourlyUl(parisShop);

populateHourlyUl(limaShop);

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
