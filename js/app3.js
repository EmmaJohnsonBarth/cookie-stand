console.log('app3.js is connected');

// !!!You were super close! - Tricia

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

const seattleShop = new Shop('Seattle', 23, 65, 6.3);
const tokyoShop = new Shop('Tokyo', 3, 24, 1.2);
const dubaiShop = new Shop('Dubai', 11, 38, 3.7);
const parisShop = new Shop('Paris', 20, 38, 2.3);
const limaShop = new Shop('Lima', 2, 16, 4.6);

function randomCustPerHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function populateCustArray(shop, min, max) {
  for (let i = 0; i < hours.length; i++) {
    shop.customersEachHour.push(randomCustPerHour(min, max));
  }
}

function populateCookiesArray(shop, avgCookiesPerSale) {
  for (let i = 0; i < hours.length; i++) {
    shop.cookiesEachHour.push(Math.ceil(shop.customersEachHour[i] * avgCookiesPerSale));
  }
}

populateCustArray(seattleShop, seattleShop.minCustHr, seattleShop.maxCustHr);
populateCustArray(tokyoShop, tokyoShop.minCustHr, tokyoShop.maxCustHr);
populateCustArray(dubaiShop, dubaiShop.minCustHr, dubaiShop.maxCustHr);
populateCustArray(parisShop, parisShop.minCustHr, parisShop.maxCustHr);
populateCustArray(limaShop, limaShop.minCustHr, limaShop.maxCustHr);

populateCookiesArray(seattleShop, seattleShop.avgCookiesPerSale);
populateCookiesArray(tokyoShop, tokyoShop.avgCookiesPerSale);
populateCookiesArray(dubaiShop, dubaiShop.avgCookiesPerSale);
populateCookiesArray(parisShop, parisShop.avgCookiesPerSale);
populateCookiesArray(limaShop, limaShop.avgCookiesPerSale);

const shops = [seattleShop, tokyoShop, dubaiShop, parisShop, limaShop];
console.log(shops);

const tbody = document.querySelector('tbody');

//!!! Edit this function so that it displays hourly totals
function render(shop) {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${shop.cityName}</td>`;

  let dailyTotal = 0;

  for (const cookies of shop.cookiesEachHour) {
    row.innerHTML += `<td>${cookies}</td>`;
    dailyTotal += cookies;
  }
  row.innerHTML += `<td>${dailyTotal}</td>`;
  tbody.appendChild(row);
}

// Render the data for each shop here
for (const shop of shops) {
  render(shop);
}

// function generateFooterRow() {
//   const footerRow = document.createElement('tr');
//   footerRow.innerHTML = '<td>Total</td>';

//   const hourlyTotals = new Array(hours.length).fill(0);
//   let totalOfTotals = 0;

//   for (const shop of shops) {
//     for (let i = 0; i < shop.cookiesEachHour.length; i++) {
//       hourlyTotals[i] += shop.cookiesEachHour[i];
//     }
//     totalOfTotals += calculateDailyTotal(shop);
//   }

//   for (const total of hourlyTotals) {
//     footerRow.innerHTML += `<td>${total}</td>`;
//   }
//   footerRow.innerHTML += `<td>${totalOfTotals}</td>`;
//   return footerRow;
// }

// const footerRow = generateFooterRow();
// tbody.appendChild(footerRow);


///


function handleFormSubmitted(event) {
  event.preventDefault();
  console.log('made it to the handle submit function', event.target);
  event.stopPropagation();
  let shopName = event.target.name.value;
  let minInput = event.target.min.value;
  let maxInput = event.target.max.value;
  let avgCookie = event.target.avg.value;

  let newShop = new Shop(shopName, minInput, maxInput, avgCookie);
  populateCustArray(newShop, newShop.minCustHr, newShop.maxCustHr);
  populateCookiesArray(newShop, newShop.avgCookiesPerSale);

  shops.push(newShop);
  render(newShop);
}

let form = document.getElementById('new-shop');
form.reset();

form.addEventListener('submit', handleFormSubmitted);
