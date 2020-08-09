import { createAsyncThunk } from "@reduxjs/toolkit";

import { readAndParserYAMLFile } from "../../../services/template";

export const findTemplates = createAsyncThunk(
  "templates/find-templates",
  () => {
    // TODO: read all user template paths
    const template = readAndParserYAMLFile(
      "/Users/sebastian.delaroche/kerthin/kerthin-templates/default.yml"
    );

    return [template];
  }
);
