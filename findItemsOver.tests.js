describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold.' , function(){

    assert.deepEqual(findItemsOver(itemList, 25),results)
    })
    it('should return nothing if no products have quantity higher than the threshold.' , function(){

        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37}]), [])
        })
}); 