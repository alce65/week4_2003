import { render } from "@testing-library/react";
import { App } from "./App";
import { Header } from "../header/header";
import { AppRouter } from "../app.router/app.router";
import { Footer } from "../footer/footer";

jest.mock("../header/header");
jest.mock("../app.router/app.router");
jest.mock("../footer/footer");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header, AppRouter & Footer", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
