import Counter from "../components/Counter";
import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

test("counter increments and decrements when the buttons are clicked", () => {
  // ✅ Use the render method to render the <Counter /> component.
  render(<Counter />);
  // ✅ Use screen.getByText to get each button.
  const increment = screen.getByText("Increment");
  const decrement = screen.getByText("Decrement");
  // ✅ Use screen.getByText to get the message
  const message = screen.getByText("Current count: 0");
  // ✅ Expect the message to have text content "Current count: 0"
  expect(message.textContent).toBe("Current count: 0");
  // ✅ Use user.click to click the increment
  user.click(increment);
  // ✅ Expect the message to have text content "Current count: 1"
  expect(message.textContent).toBe("Current count: 1");
  // ✅ Use user.click to click the decrement
  user.click(decrement);
  // ✅ Expect the message to have text content "Current count: 0"
  expect(message.textContent).toBe("Current count: 0");
});
