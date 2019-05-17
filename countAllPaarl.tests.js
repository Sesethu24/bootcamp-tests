describe('countAllPaarl' , function(){
    it('should returns the number of registration numbers in the string for Paarl' , function(){

    assert.deepEqual(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),(3));
    });
    it('should return nothing if there is no registration numbers in the string for Paarl' , function(){

        assert.deepEqual(countAllPaarl("CL 123-546, CK 345"),(0));
        });
});