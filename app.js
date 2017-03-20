'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookieHourTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var totalSum = function(totalSalesInput){
  var retvalue = 0;
  for (var i = 0; i < totalSalesInput.length; i++){
    retvalue += totalSalesInput[i];
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
      var hourlyCookies = this.calcCookieSales();
      this.totalSales.push(hourlyCookies);
      cookieHourTotals[i] += hourlyCookies;
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
  tr.setAttribute('id', 'footerElement');
  var td = document.createElement('td');
  table.appendChild(tfoot);
  tfoot.appendChild(tr);
  tr.appendChild(td);
  var textTotal = document.createTextNode('Total');
  td.appendChild(textTotal);
  for (var i = 0; i < hours.length; i++) {
    var td = document.createElement('td');
    var timeText = document.createTextNode(cookieHourTotals[i]);
    td.appendChild(timeText);
    tr.appendChild(td);
  }
  var td2 = document.createElement('td');
  var textTotal2 = document.createTextNode(totalSum(cookieHourTotals));
  td2.appendChild(textTotal2);
  tr.appendChild(td2);
};
generateTableFooter();

function generateStoreData(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeNameInput = theFormItself.elements['store-name-input'].value;
  var minCustomerInput = theFormItself.elements['min-cust-input'].value;
  var maxCustomerInput = theFormItself.elements['max-cust-input'].value;
  var avgCookiesInput = theFormItself.elements['avgCookies-input'].value;

  var formStore = new Store(storeNameInput, minCustomerInput, maxCustomerInput, avgCookiesInput);

  var footerTds = document.getElementById('footerElement').childNodes;
  for (var i = 1; i < footerTds.length - 1; i++) {
    footerTds[i].textContent = cookieHourTotals[i - 1];
  }
  footerTds[footerTds.length - 1].textContent = totalSum(cookieHourTotals);
  form.reset();
};
var form = document.getElementById('theForm');
form.addEventListener('submit', generateStoreData);
