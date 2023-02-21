import { MOCK_TASKS } from "../../../todo/mocks/tasks";
import { NoteApiRepo } from "./note.api.repo";

describe("first", () => {
  let repo: NoteApiRepo;
  beforeEach(() => {
    repo = new NoteApiRepo();
  });
  test("should first", () => {
    const mockData = MOCK_TASKS;
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });
    console.log(repo.loadNotes());
    const r = repo.loadNotes();
    expect(r).toEqual(mockData);
  });
});
