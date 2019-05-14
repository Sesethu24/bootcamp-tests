describe('fromWhere' , function(){
    it('should return Bellville if the registration number is from there' , function(){

    assert.equal(fromWhere('CY'),"Bellville");
    });
    it('should return Paarl if the registration number is from there' , function(){

        assert.equal(fromWhere('CJ'),"Paarl");
        });
    it('should return Cape Town if the registration number is from there' , function(){

            assert.equal(fromWhere('CA'),"Cape Town");
            });

});