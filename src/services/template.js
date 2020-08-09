import * as fs from "fs";
import * as YAML from "yaml";
import * as R from "ramda";

export const getScaffolding = R.prop("Scaffolding");

export const readAndParserYAMLFile = (path) => {
  const file = fs.readFileSync(path, "utf8");
  return YAML.parseDocument(file).toJSON();
};

export const transformScaffolding = (scaffolding, index = 0, output = []) => {
  if (!scaffolding[index]) return output;

  const node = scaffolding[index];

  const element = {
    title: node.Name,
    key: Math.round(Math.random() * 1000),
  };

  if (node.Children) {
    element.children = transformScaffolding(node.Children, 0, []);
  }

  output.push(element);

  return transformScaffolding(scaffolding, index + 1, output);
};

export const readYAMLAndTransformScaffolding = R.compose(
  transformScaffolding,
  getScaffolding,
  readAndParserYAMLFile
);
