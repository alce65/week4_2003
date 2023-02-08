import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Menu } from "./menu";
import { MenuOption } from "../app/App";

describe("Given Menu component", () => {
  describe("When it is rendered", () => {
    test("Then menu should be in the screen", () => {
      const mockOptions: MenuOption[] = [
        {
          label: "Test",
          path: "/test",
        },
      ];
      render(
        <Router>
          <Menu options={mockOptions}></Menu>
        </Router>
      );
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
