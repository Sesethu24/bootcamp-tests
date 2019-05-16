describe('From Bellville' , function(){
    it('should return is From Bellville' , function(){
    assert.equal(isFromBellville('CY'), true);
    
    });
    it('should return is not from Bellville' , function(){
        assert.equal(isFromBellville('CA'), false);
        
        });
        
});