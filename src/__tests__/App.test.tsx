import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    // console.log(screen.getByText("My favorite fruit is banana"));
    expect(screen.getByText("My favorite fruit is banana")).toBeInTheDocument();
  });
});
