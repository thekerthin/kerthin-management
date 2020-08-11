import * as fs from "fs";
import * as YAML from "yaml";
import * as R from "ramda";
import * as uuid from "uuid";

export const templateSpec = R.applySpec({
  id: R.prop("Id"),
  name: R.prop("TemplateName"),
  version: R.prop("Version"),
  image: R.prop("Image"),
  scaffolding: R.compose(transformScaffolding, R.prop("Scaffolding")),
});

export const readAndParserYAMLFile = (path) => {
  const file = fs.readFileSync(path, "utf8");
  return YAML.parseDocument(file).toJSON();
};

export function transformScaffolding(scaffolding, index = 0, output = []) {
  if (!scaffolding[index]) return output;

  const node = scaffolding[index];

  const element = {
    title: node.Name,
    key: uuid.v4(),
    content: node.Content || null,
  };

  if (node.Children) {
    element.children = transformScaffolding(node.Children, 0, []);
  }

  output.push(element);

  return transformScaffolding(scaffolding, index + 1, output);
}

export const readYAMLAndNormalize = R.compose(
  templateSpec,
  readAndParserYAMLFile
);
