import { createAsyncThunk } from "@reduxjs/toolkit";

import { readYAMLAndNormalize } from "../../../services/template";

export const findTemplates = createAsyncThunk(
  "templates/find-templates",
  () => {
    // TODO: read all user template paths
    const template = readYAMLAndNormalize(
      "/Users/sebastian.delaroche/kerthin/kerthin-templates/default.yml"
    );

    return [template];
  }
);
