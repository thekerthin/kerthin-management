import * as R from "ramda";

export const getTemplateInfo = R.applySpec({
  id: R.prop("id"),
  title: R.prop("title"),
  version: R.prop("version"),
  image: R.prop("image"),
});

export const decorator = R.converge(R.call, [
  R.prop("onClick"),
  getTemplateInfo,
]);
