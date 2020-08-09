import React from "react";
import { useParams } from "react-router-dom";

// import {
//   readAndParserYAMLFile,
//   getScaffolding,
//   transformScaffolding,
// } from "../../../services/template";

// const templatePathFile =
//   "/Users/sebastian.delaroche/kerthin/kerthin-templates/default.yml";

// const template = readAndParserYAMLFile(templatePathFile);
// const data = transformScaffolding(getScaffolding(template));
// <Tree
//   showLine={true}
//   showIcon={false}
//   defaultExpandAll={true}
//   treeData={data}
// />;

const ViewTemplate = () => {
  const params = useParams();
  console.log(params.id);

  return <div> View Template </div>;
};

export default ViewTemplate;
