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
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function populateCustArray(shop, min, max) {
    for (let i = 0; i < hours.length; i++) {
        shop.customersEachHour.push(randomCustPerHour(min, max));
    }
}

function populateCookiesArray(shop, avgCookiesPerSale) {
    for (let i = 0; i < hours.length; i++) {
        shop.cookiesEachHour.push(shop.customersEachHour[i] * avgCookiesPerSale);
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

// Define the render method for each shop
function render(shop) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${shop.cityName}</td>`;

    let totalCookies = 0;

    for (const custCount of shop.customersEachHour) {
        const cookies = Math.round(custCount * shop.avgCookiesPerSale);
        totalCookies += cookies;
        row.innerHTML += `<td>${cookies}</td>`;
    }

    row.innerHTML += `<td>${totalCookies}</td>`;
    tbody.appendChild(row);
}

render(seattleShop);
render(dubaiShop);
render(limaShop)
render(parisShop);
render(tokyoShop);

function generateFooterRow() {
    const footerRow = document.createElement("tr");
    footerRow.innerHTML = `<td>Total</td>`;

    let hourlyTotals = Array.from({ length: hours.length }, () => 0);

    for (const shop of shops) {
        for (let i = 0; i < shop.cookiesEachHour.length; i++) {
            hourlyTotals[i] += shop.cookiesEachHour[i];
        }
    }

    let grandTotal = 0;

    for (const total of hourlyTotals) {
        grandTotal += total;
        footerRow.innerHTML += `<td>${total}</td>`;
    }

    footerRow.innerHTML += `<td>${grandTotal}</td>`;
    return footerRow;
}

const headerRow = generateHeaderRow();
thead.appendChild(headerRow);

const tbody = document.querySelector("tbody");

const footerRow = generateFooterRow();
tbody.appendChild(footerRow);
