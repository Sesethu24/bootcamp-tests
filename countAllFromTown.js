function countAllFromTown(registration,list){
   
      
      var reg = [];
      var regList = registration.split(',');
    
      for(var i=0;i<regList.length;i++)  {
        var car = regList[i]
       var cars =  car.trim();
        if(cars.startsWith(list)){
           reg.push(cars);
         }
      }
          
        return reg.length;
    }