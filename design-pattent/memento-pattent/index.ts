import { Editor } from "./editor";
import { History } from "./history";

function main() {
  let editor = new Editor();
  let history = new History();

  editor.setContent("a");
  history.push(editor.createState());

  editor.setContent("b");
  history.push(editor.createState());

  editor.setContent("c");
  editor.restore(history.pop());

  console.log(editor.getContent());
}
main();
