describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){

    assert.deepEqual(findItemsOver20(itemList),results)
    })
    it('should return nothing if no products have a quantity higher than 20' , function(){

        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":3}]), [])
        });
});