function countAllPaarl(param)
{
  var reg = [];
  var regList = param.split(', ')
  for(var i=0;i<regList.length;i++){
    var car = regList;
    if(regList[i].startsWith('CJ')){
    reg.push(regList[i]);
   
  }
  }
    return reg.length
};