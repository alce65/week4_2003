/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "./card";
import { NoteStructure } from "../../models/note";

import { UseNotesStructure } from "../../hooks/use.notes";
import { NotesContext } from "../../context/notes.context";

const mockNote: NoteStructure = {
  name: "Test note",
} as unknown as NoteStructure;

const mockContext = {
  updateNote: jest.fn(),
  deleteNote: jest.fn(),
} as unknown as UseNotesStructure;

describe("Given Card component", () => {
  describe("When it is rendered", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <NotesContext.Provider value={mockContext}>
          <Card note={mockNote}></Card>
        </NotesContext.Provider>
      );
      elements = [
        screen.getByText(mockNote.title),
        screen.getByRole("checkbox"),
        screen.getByRole("button"),
      ];
    });

    test("Then note title should be in the document", () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test("Then, if user click button delete, deleteNote should be call", () => {
      expect(elements[2]).toBeInTheDocument();
      userEvent.click(elements[2]);
      expect(mockContext.deleteNote).toHaveBeenCalled();
    });

    test("Then, if user click checkbox, updateNote should be call", () => {
      expect(elements[1]).toBeInTheDocument();
      userEvent.click(elements[1]);
      expect(mockContext.updateNote).toHaveBeenCalled();
    });
  });
});
