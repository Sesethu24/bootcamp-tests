describe('yearsAgo' , function(){
    it('should take in a year and return how many years ago that was' , function(){
        
        assert.equal(yearsAgo(1976), 43);

        
    });
    it('should return how many years ago that was' , function(){
        
        assert.equal(yearsAgo(2000), 19);

        
    });
});