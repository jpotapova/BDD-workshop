describe("Sum of", function() {

    it("22 and 5 should be 27", function() {
        expect(sum(22, 5)).toBe(27);
    });

    it("14 and 6 should be 20", function() {
        expect(sum(14, 6)).toBe(20);
    });

    it("14, 6 and 3 should be 23", function() {
        expect(sum(14, 6, 3)).toBe(23);
    });

});
