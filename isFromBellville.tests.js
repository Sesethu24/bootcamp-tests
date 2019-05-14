describe('From Bellville' , function(){
    it('should return is From Bellville' , function(){
    assert.equal(isFromBellville('CY'), true);
    
    });
    it('otherwise return false' , function(){
        assert.equal(isFromBellville('CA'), false);
        
        });
        
});