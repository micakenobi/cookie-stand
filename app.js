'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var totalSum = function(totalSales){
  var retvalue = 0;
  for (var i = 0; i < totalSales.length; i++){
    retvalue += totalSales[i];
  }
  return retvalue;
};

var firstAndPike = {
  storeName: 'First and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  totalSales: [],

  calcRandomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  calcCookieSales: function() {
    var hourlySales = (this.avgCookies * this.calcRandomCustomerPerHour());
    return Math.floor(hourlySales);
  },
  simulatePurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalSales.push(this.calcCookieSales());
    }
  },

  makingList: function() {
    var body = document.getElementsByTagName('body')[0];
    var newHeading = document.createElement('h2');
    var UnList = document.createElement('ul');
    body.appendChild(newHeading);
    body.appendChild(UnList);
    newHeading.innerText = this.storeName;
    for(var i = 0; i < hours.length; i++){
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(hours[i] + ': ' + this.totalSales[i] + ' cookies');
      newListItem.appendChild(newText);
      UnList.appendChild(newListItem);
    }
    var newListItem = document.createElement('li');
    var totalText = document.createTextNode('Total Cookies: ' + totalSum(this.totalSales));
    newListItem.appendChild(totalText);
    UnList.appendChild(newListItem);
  },
};

firstAndPike.simulatePurchases();
firstAndPike.makingList();

var seaTacAirport = {
  storeName: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  totalSales: [],

  calcRandomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  calcCookieSales: function() {
    var hourlySales = (this.avgCookies * this.calcRandomCustomerPerHour());
    return Math.floor(hourlySales);
  },
  simulatePurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalSales.push(this.calcCookieSales());
    }
  },

  makingList: function() {
    var body = document.getElementsByTagName('body')[0];
    var newHeading = document.createElement('h2');
    var UnList = document.createElement('ul');
    body.appendChild(newHeading);
    body.appendChild(UnList);
    newHeading.innerText = this.storeName;
    for(var i = 0; i < hours.length; i++){
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(hours[i] + ': ' + this.totalSales[i] + ' cookies');
      newListItem.appendChild(newText);
      UnList.appendChild(newListItem);
    }
    var newListItem = document.createElement('li');
    var totalText = document.createTextNode('Total Cookies: ' + totalSum(this.totalSales));
    newListItem.appendChild(totalText);
    UnList.appendChild(newListItem);
  }
};

seaTacAirport.simulatePurchases();
seaTacAirport.makingList();

var seattleCenter = {
  storeName: 'Seattle Center',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  totalSales: [],

  calcRandomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  calcCookieSales: function() {
    var hourlySales = (this.avgCookies * this.calcRandomCustomerPerHour());
    return Math.floor(hourlySales);
  },
  simulatePurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalSales.push(this.calcCookieSales());
    }
  },

  makingList: function() {
    var body = document.getElementsByTagName('body')[0];
    var newHeading = document.createElement('h2');
    var UnList = document.createElement('ul');
    body.appendChild(newHeading);
    body.appendChild(UnList);
    newHeading.innerText = this.storeName;
    for(var i = 0; i < hours.length; i++){
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(hours[i] + ': ' + this.totalSales[i] + ' cookies');
      newListItem.appendChild(newText);
      UnList.appendChild(newListItem);
    }
    var newListItem = document.createElement('li');
    var totalText = document.createTextNode('Total Cookies: ' + totalSum(this.totalSales));
    newListItem.appendChild(totalText);
    UnList.appendChild(newListItem);
  }
};

seattleCenter.simulatePurchases();
seattleCenter.makingList();

var capitolHill = {
  storeName: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  totalSales: [],

  calcRandomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  calcCookieSales: function() {
    var hourlySales = (this.avgCookies * this.calcRandomCustomerPerHour());
    return Math.floor(hourlySales);
  },
  simulatePurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalSales.push(this.calcCookieSales());
    }
  },

  makingList: function() {
    var body = document.getElementsByTagName('body')[0];
    var newHeading = document.createElement('h2');
    var UnList = document.createElement('ul');
    body.appendChild(newHeading);
    body.appendChild(UnList);
    newHeading.innerText = this.storeName;
    for(var i = 0; i < hours.length; i++){
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(hours[i] + ': ' + this.totalSales[i] + ' cookies');
      newListItem.appendChild(newText);
      UnList.appendChild(newListItem);
    }
    var newListItem = document.createElement('li');
    var totalText = document.createTextNode('Total Cookies: ' + totalSum(this.totalSales));
    newListItem.appendChild(totalText);
    UnList.appendChild(newListItem);
  }
};

capitolHill.simulatePurchases();
capitolHill.makingList();

var alki = {
  storeName: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  totalSales: [],

  calcRandomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  calcCookieSales: function() {
    var hourlySales = (this.avgCookies * this.calcRandomCustomerPerHour());
    return Math.floor(hourlySales);
  },
  simulatePurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalSales.push(this.calcCookieSales());
    }
  },

  makingList: function() {
    var body = document.getElementsByTagName('body')[0];
    var newHeading = document.createElement('h2');
    var UnList = document.createElement('ul');
    body.appendChild(newHeading);
    body.appendChild(UnList);
    newHeading.innerText = this.storeName;
    for(var i = 0; i < hours.length; i++){
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(hours[i] + ': ' + this.totalSales[i] + ' cookies');
      UnList.appendChild(newListItem);
      newListItem.appendChild(newText);
    }
    var newListItem = document.createElement('li');
    var totalText = document.createTextNode('Total Cookies: ' + totalSum(this.totalSales));
    newListItem.appendChild(totalText);
    UnList.appendChild(newListItem);
  }
};

alki.simulatePurchases();
alki.makingList();
