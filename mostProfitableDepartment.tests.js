describe('mostProfitableDepartment' , function(){
    it('should return the most profitable departments' , function(){
       
     assert.deepEqual(mostProfitableDepartment(salesData), 'outdoor');
    });
    it('should return the least profitable departments' , function(){
       
        assert.deepEqual(mostProfitableDepartment(salesData), 'outdoor');
       });
       
});