describe("Required field", function(){

  it("is invalid when it contains an empty string", function(){
    expect(validateRequired("")).toBe(false);
  });

  it("is invalid when it contains only a space", function(){
    expect(validateRequired(" ")).toBe(false);
  });

  it("is valid when it contains anything else", function(){
    expect(validateRequired("hello")).toBe(true);
  });

});
