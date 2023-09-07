import { EditorState } from "./editor-state";

export class History {
  private states: EditorState[] = [];

  public push(state: EditorState): void {
    this.states.push(state);
  }

  public pop(): EditorState {
    const lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex];
    this.states.splice(lastIndex, 1);

    return lastState;
  }
}
