import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tree } from "antd";

import { getTemplateById } from "../../store/template/selectors";
import PageLayout from "../../components/PageLayout";
import Editor from "../../components/Editor";

const ViewTemplate = () => {
  const params = useParams();
  const template = useSelector((state) => getTemplateById(state, params.id));
  // TODO: this can't kept like this,  pretty bad practice, just practice behavior
  const [textCode, setTextCode] = useState("");

  const onSelect = (_, target) => {
    console.log("node", target.node.content);
    setTextCode(target.node.content || "");
  };

  return (
    <PageLayout
      sider={
        <Tree
          disabled={false}
          showLine={true}
          showIcon={false}
          defaultExpandAll={true}
          onSelect={onSelect}
          treeData={template.scaffolding}
        />
      }
      content={<Editor text={textCode} />}
    />
  );
};

export default ViewTemplate;
