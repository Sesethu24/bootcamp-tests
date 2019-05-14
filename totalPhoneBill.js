function totalPhoneBill(list){
    var list1 = [];
    var list2 = [];
    var list3 = list.split(', ')
    for(var i=0;i<list3.length;i++){
    var list4 = list3[i];
      if(list4==='call'){
      list1.push(list4)
      }
    }
    for(var k=0;k<list3.length;k++){
    var list5 = list3[k];
      if(list5==='sms'){
      list2.push(list5)
      }
    }
    var totalCost= list1.length*2.75 + list2.length* 0.65
    return("R" + totalCost.toFixed(2))
  }
   