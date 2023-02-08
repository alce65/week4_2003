/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact2 } from "./contact2";

describe("Given Contact2 component", () => {
  const spyLog = jest.spyOn(console, "log");
  // Arrange
  let elements: HTMLElement[];
  beforeEach(() => {
    render(<Contact2></Contact2>);
    elements = [
      screen.getByRole("heading"),
      ...screen.getAllByRole("textbox"),
      ...screen.getAllByRole("radio"),
      screen.getByRole("checkbox"),
      screen.getByRole("combobox"),
      screen.getByRole("button"),
    ];
  });

  describe("When it is render", () => {
    // Act

    test("Then it shoud be in the document", () => {
      // Assert
      expect(elements[0]).toBeInTheDocument();
      expect(elements.length).toBe(9);
    });
  });

  describe("When the user type in the inputs", () => {
    test("Then text should be in the screen", () => {
      const mockUser = "Pepe";
      userEvent.type(elements[1], mockUser);
      expect(elements[1]).toHaveValue(mockUser);
      userEvent.click(elements[6]);
      expect(elements[6]).toBeChecked();
    });
  });

  describe("When the user click in the button", () => {
    test("Then data should be in the console", () => {
      fireEvent.click(elements[8]);
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
