import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Counter } from "../components/conter";

describe("Counter Component", () => {
  it("shoud render with initial count 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  it("should increment the count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole("button", { name: /increment/i });
    await user.click(button);

    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });
});
