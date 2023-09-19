'use strict';

console.log('demo connected');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
    locationName: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    dailyTotalCookies: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            //array that we need to push random customers per hour
            this.customersEachHour.includespush(random(this.maxCustomersPerHour, this.minCustomersPerHour))
        }
    },
    calcCookiesEachHour: function () {
        this.calcCustomersEachHour();
        for (let i = 0; i < hours.length; i++) {
            console.log(this.customersEachHour[i]);
            let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
            console.log('for each hour: ', oneHour);
            //array for cookies
            this.cookiesEachHour.push(oneHour);
            this.dailyTotalCookies += oneHour;
        }
    },
    render() {
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('city');
        for (let i = 0; i < hours.length; i++ {
            const listItem = document.createElement('li');
            listItem.textContent()
        })
    }
};

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

seattle.calcCustomersEachHour();

console.log(seattle.customersEachHour)

let allShops = ["Seattle", "Paris", "Dubai", "Lima",]


function renderAllShops() {
    for (let i = 0; i < allShops.length; i++) {
        allShops[i].render()
    }
}

renderAllShops();