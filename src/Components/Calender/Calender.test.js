import { render, screen } from "@testing-library/react";
import Calender from "./Calender";

test("renders correct month and year heading", () => {
  render(<Calender date="23/03/2020" />);

  const heading = screen.getByTestId("calendar-heading");

  expect(heading).toHaveTextContent("March 2020");
});

test("highlights the selected date", () => {
  render(<Calender date="23/03/2020" />);

  const selected = screen.getByTestId("selected-date");

  expect(selected).toHaveTextContent("23");
});

test("renders 7 weekday headers", () => {
  render(<Calender date="23/03/2020" />);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  days.forEach((day) => {
    expect(screen.getByText(day)).toBeInTheDocument();
  });
});

test("renders all days of the month", () => {
  render(<Calender date="23/03/2020" />);

  for (let i = 1; i <= 31; i++) {
    expect(screen.getByText(i.toString())).toBeInTheDocument();
  }
});
