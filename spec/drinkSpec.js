describe("whatCanIDrink", function () {
  it("should return incorrect age for negative number", function () {
    let response = whatCanIDrink(-1)
    expect(response).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
  });
    it("should return toddy", function () {
    let response = whatCanIDrink(7)
    expect(response).toBe("Drink Toddy");
  });
  it("should return Coke", function () {
    let response = whatCanIDrink(17)
    expect(response).toBe("Drink Coke");
  });
  it("should return Beer", function () {
    let response = whatCanIDrink(20)
    expect(response).toBe("Drink Beer");
  });
  it("should return Whiskey", function () {
    let response = whatCanIDrink(129)
    expect(response).toBe("Drink Whiskey");
  });
  it("should return incorrect input", function () {
    let response = whatCanIDrink("hej")
    expect(response).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
  });  
});
