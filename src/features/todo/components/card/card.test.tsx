/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "./card";
import { TaskStructure } from "../../models/task";
import { AppContext } from "../../../../core/context/app.context";
import { UseTasksStructure } from "../../hooks/use.tasks";

const mockTask: TaskStructure = {
  name: "Test task",
} as TaskStructure;

const mockContext = {
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
} as unknown as UseTasksStructure;

describe("Given Card component", () => {
  describe("When it is rendered", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <Card task={mockTask}></Card>
        </AppContext.Provider>
      );
      elements = [
        screen.getByText(mockTask.name),
        screen.getByRole("checkbox"),
        screen.getByRole("button"),
      ];
    });

    test("Then task name should be in the document", () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test("Then, if user click button delete, deleteTask should be call", () => {
      expect(elements[2]).toBeInTheDocument();
      userEvent.click(elements[2]);
      expect(mockContext.deleteTask).toHaveBeenCalled();
    });

    test("Then, if user click checkbox, updateTask should be call", () => {
      expect(elements[1]).toBeInTheDocument();
      userEvent.click(elements[1]);
      expect(mockContext.updateTask).toHaveBeenCalled();
    });
  });
});
