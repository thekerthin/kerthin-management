import { templateAdapter } from "./slice";

const selectors = templateAdapter.getSelectors((state) => state.templates);

export const {
  selectAll: getAllTemplates,
  selectById: getTemplateById,
} = selectors;
