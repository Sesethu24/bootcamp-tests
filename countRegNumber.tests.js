describe('countRegNumber' , function(){
    it('should return the number of registration numbers in the string' , function(){

        assert.deepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),(3));
    });

});