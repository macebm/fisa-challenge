import addNumbers from "./addNumbers";

describe ("addNumbers", () => {
    it("should return the some of 2 numbers", () => {
        const result = addNumbers(5, 3);
        expect(result).toEqual(8);
    });
})