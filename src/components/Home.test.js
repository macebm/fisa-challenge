import subtractSlideNumber from "../components/Home";

xdescribe("subtractSlideNumber", () => {
  it("Should return 9 when my slideIndex is not declared", () => {
    const result = subtractSlideNumber();
    expect(result).toEqual(9);
  });
});
