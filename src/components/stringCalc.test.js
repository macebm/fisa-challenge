import stringCalc from "./stringCalc";
import { sum } from "./stringCalc";

describe ("stringCalc", () => {
    it("should return 0 for an empty string", () => {
        const result = stringCalc("");
        expect(result).toEqual(0);
    });
    it("should return the sum of multiple comma seperated numbers", () => {
        const result = stringCalc("1, 2, 3");
        expect(result).toEqual(6);
    });
});

describe ("sum", () => {
    it("return the sum of several numbers", () => {
        expect(sum([2, 5])).toEqual(7);
    })
});