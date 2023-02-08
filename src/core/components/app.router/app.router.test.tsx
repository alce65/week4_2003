import { render, screen } from "@testing-library/react";
import { AppRouter } from "./app.router";
import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../app/App";

const mockOptions: MenuOption[] = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "1",
    path: "/1",
  },
  {
    label: "2",
    path: "/2",
  },
];

describe("Given AppRouter", () => {
  describe("When the route is home", () => {
    render(
      <Router initialEntries={["/home", "/otra"]} initialIndex={0}>
        <AppRouter menuOptions={mockOptions}></AppRouter>
      </Router>
    );
    test("Then we should navigate to home", async () => {
      const element = await screen.findByRole("heading", { name: "Home Page" });
      expect(element).toBeInTheDocument();
    });
  });
});
