import { createSelector } from "reselect";
import * as R from "ramda";

export const getTemplateById = (id) =>
  createSelector(
    R.prop("templates"),
    R.find((template) => template.id == id)
  );

export const getAllTemplates = R.path(["templates", "data"]);
