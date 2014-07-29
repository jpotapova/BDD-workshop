
describe("On form submit", function(){

  it("field validation should be applied 4 times", function(){
    spyOn(window, 'validate');
    $('button').click();
    expect(validate.calls.count()).toBe(4);
  });

});
