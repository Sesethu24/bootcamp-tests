describe('isWeekday' , function(){
    it('should find out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);

        
    });
    it('return false if the parameter passed in is not a weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);

        
    });

});