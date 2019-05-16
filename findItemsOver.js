function findItemsOver(param1,param2){
  
  var items = [];
  for(var i=0;i<param1.length;i++){
    var cal = param1[i].qty;
   if(cal >param2){
    items.push(param1[i]);
    }
    }
    return items
 }
 var itemList = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];
var results = findItemsOver(itemList, 25)