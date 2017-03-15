'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var totalSum = function(totalSales){
  var retvalue = 0;
  for (var i = 0; i < totalSales.length; i++){
    retvalue += totalSales[i];
  }
  return retvalue;
};

function Store(storeNamePara, minCustomerPara, maxCustomerPara, avgCookiesPara){
  this.storeName = storeNamePara;
  this.minCustomer = minCustomerPara;
  this.maxCustomer = maxCustomerPara;
  this.avgCookies = avgCookiesPara;
  this.totalSales = [];
  this.calcRandomCustomerPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  };
  this.calcCookieSales = function() {
    var hourlySales = (this.avgCookies * this.calcRandomCustomerPerHour());
    return Math.floor(hourlySales);
  };
  this.simulatePurchases = function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalSales.push(this.calcCookieSales());
    }
  };
  this.makingList = function() {
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
  };

  this.simulatePurchases();
  // this.makingList();
}
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function generateTableTitle(){
  var body = document.getElementsByTagName('body')[0];
  var h4 = document.createElement('h4');
  var title = document.createTextNode('Cookies Needed By Location Each Day');
  var table = document.createElement('table');
  body.appendChild(h4);
  h4.appendChild(title);
  body.appendChild(table);

};
generateTableTitle();

function generateTableHeaders(){
  var table = document.getElementsByTagName('table')[0];
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  table.appendChild(thead);
  thead.appendChild(tr);
  tr.appendChild(td);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    var timeText = document.createTextNode(hours[i]);
    th.appendChild(timeText);
    tr.appendChild(th);
  }
  var thTotal = document.createElement('th');
  var textTotal = document.createTextNode('Daily Location Total');
  tr.appendChild(thTotal);
  thTotal.appendChild(textTotal);
};
generateTableHeaders();
