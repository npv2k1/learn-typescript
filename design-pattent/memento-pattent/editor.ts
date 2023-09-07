import { EditorState } from "./editor-state";

export class Editor {
  private content: string;

  constructor() {
    this.content = "";
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public createState(): EditorState {
    return new EditorState(this.content);
  }

  public restore(state: EditorState): void {
    this.content = state.getContent();
  }
}
