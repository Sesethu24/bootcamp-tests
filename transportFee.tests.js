describe('transportFee' , function(shift){
    it('should return the price for the morning shift' , function(){
        assert.equal(transportFee("morning"), "R20");

        
    });
    it('should return the price for the afternoon shift' , function(){
        assert.equal(transportFee("afternoon"),"R10");

        
    });
    it('should return the price for the night shift' , function(){
        assert.equal(transportFee(shift==="night"),'free');

        
    });
});