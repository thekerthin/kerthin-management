import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "codemirror/mode/javascript/javascript";
import "./Editor.css";

const Editor = (props) => (
  <CodeMirror
    value={props.text || ""}
    options={{
      mode: "javascript",
      theme: "material",
      lineNumbers: true,
      autocorrect: true,
    }}
  />
);

export default Editor;
