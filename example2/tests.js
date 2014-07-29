describe("Required field", function(){

  it("is invalid when it contains an empty string", function(){
    expect(validateRequired("")).toBe(false);
  });

});
