/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { ProtoNoteStructure, NoteStructure } from "../../models/note";

export interface NoteApiRepoStructure {
  loadNotes(): Promise<NoteStructure[]>;
  getNote(id: NoteStructure["id"]): Promise<NoteStructure>;
  createNote(note: ProtoNoteStructure): Promise<NoteStructure>;
  update(note: Partial<ProtoNoteStructure>): Promise<NoteStructure>;
  delete(id: NoteStructure["id"]): Promise<void>;
}

export class NoteApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5080/notes";
  }

  async loadNotes(): Promise<NoteStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as NoteStructure[];
    return data;
  }

  async getNote(id: NoteStructure["id"]): Promise<NoteStructure> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as NoteStructure;
    return data;
  }

  async createNote(note: ProtoNoteStructure): Promise<NoteStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as NoteStructure;
    return data;
  }

  async update(note: Partial<NoteStructure>): Promise<NoteStructure> {
    const url = this.url + "/" + note.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as NoteStructure;
    return data;
  }

  async delete(id: NoteStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Delete not possible");
  }
}
