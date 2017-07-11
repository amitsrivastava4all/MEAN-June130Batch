describe("emi test suite",function(){
beforeEach(module('myapp'));
beforeEach(inject(function (_emifactory_) {
    emifactObject = _emifactory_;

}));    
    
it("compute emi based on 3 params ",function(){
    var output = emifactObject.emi(1000,10,2);
    var expectedOutput = 200;
    expect(output).toBe(expectedOutput);
});
it("compute emi based on 2 params ",function(){
    var output = emifactObject.emi(1000,10);
    var expectedOutput = 100;
    expect(output).toBe(expectedOutput);
}) ;
    it("compute emi based on 1 params ",function(){
    var output = emifactObject.emi(1000);
    var expectedOutput = 50;
    expect(output).toBe(expectedOutput);
}) 
})