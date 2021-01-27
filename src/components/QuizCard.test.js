import QuizCard from "./QuizCard";
import { render, fireEvent } from "@testing-library/react";

describe("QuizCard", () => {
  it("renders correctly", () => {
    const { debug, container } = render(
      <QuizCard question="Foo?" answer="Bar!" />
    );
    debug();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("shows the question and answer texts", () => {
    const { getByText, queryByText, getByRole } = render(
      <QuizCard question="Foo?" answer="Bar!" />
    );
    expect(getByText("Foo?")).toBeInTheDocument();

    expect(queryByText("Bar!", { exact: false })).not.toBeInTheDocument();
    const button = getByRole("button", { name: "Toggle answer" });
    fireEvent.click(button);
    expect(queryByText(/bar/i)).toBeInTheDocument();
  });
});
