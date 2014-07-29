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


describe("Field of minimum length", function(){

  it("4 is invalid when it contains only 3 characters", function(){
    expect(validateMinLength("aaa", 4)).toBe(false);
  });

  it("10 is invalid when it contains only 4 characters", function(){
    expect(validateMinLength("aaaa", 10)).toBe(false);
  });

  it("10 is valid when it contains 10 characters", function(){
    expect(validateMinLength("aaaaaaaaaa", 10)).toBe(true);
  });

  it("10 is valid when it contains 11 characters", function(){
    expect(validateMinLength("aaaaaaaaaaa", 10)).toBe(true);
  });

});


describe("Numeric field", function(){

  it("is invalid when it contains at least one letter", function(){
    expect(validateNumeric("123445d2323")).toBe(false);
  });

  it("is valid when it does not contain any characters other than numbers", function(){
    expect(validateNumeric("343434")).toBe(true);
  });

});
