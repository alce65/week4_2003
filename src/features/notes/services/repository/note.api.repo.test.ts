import { NoteApiRepo } from "./note.api.repo";

describe("first", () => {
  let repo: NoteApiRepo;
  beforeEach(() => {
    repo = new NoteApiRepo();
  });
  test("should first", () => {
    console.log(repo.loadNotes());
  });
});
