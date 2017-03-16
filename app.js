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
  this.render = function() {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var textData = document.createTextNode(this.storeName);
    table.appendChild(tbody);
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(textData);
    for (var i = 0; i < hours.length; i++) {
      var td = document.createElement('td');
      var cookieText = document.createTextNode(this.totalSales[i]);
      td.appendChild(cookieText);
      tr.appendChild(td);
    }
    var totalTd = document.createElement('td');
    var totalText = document.createTextNode(totalSum(this.totalSales));
    tr.appendChild(totalTd);
    totalTd.appendChild(totalText);
  };
  this.simulatePurchases();
  this.render();
}

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

var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function generateTableFooter(){
  var table = document.getElementsByTagName('table')[0];
  var tfoot = document.createElement('tfoot');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  table.appendChild(tfoot);
  tfoot.appendChild(tr);
  tr.appendChild(td);
  var textTotal = document.createTextNode('Total');
  td.appendChild(textTotal);
  for (var i = 0; i < hours.length + 1; i++) {
    var td = document.createElement('td');
    // var timeText = document.createTextNode(hours[i]);
    // th.appendChild(timeText);
    tr.appendChild(td);
  }
};
generateTableFooter();

function generateStoreData(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeNamePara = theFormItself.elements['store-name-input'].value;
  var minCustomerPara = theFormItself.elements['min-cust-input'].value;
  var maxCustomerPara = theFormItself.elements['max-cust-input'].value;
  var avgCookiesPara = theFormItself.elements['avgCookies-input'].value;
};
var form = document.getElementById('theForm');
form.addEventListener('submit', generateStoreData);
