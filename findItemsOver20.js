function findItemsOver20(param) {

  var items = [];
  for (var i = 0; i < param.length; i++) {
    var cal = param[i].qty;
    if (cal > 20) {
      items.push(param[i]);
    }
  }
  return items
}

var itemList = [
  { name: 'apples', qty: 10 },
  { name: 'pears', qty: 37 },
  { name: 'bananas', qty: 27 },
  { name: 'apples', qty: 3 },
];

var results = [{ name: 'pears', qty: 37 },   
{ name: 'bananas', qty: 27 }]

