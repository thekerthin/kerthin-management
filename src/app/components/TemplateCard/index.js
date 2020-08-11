import React from "react";
import { Card } from "antd";

import { decorator } from "./utils";

const TemplateCard = (props) => (
  <Card.Grid onClick={() => decorator(props)}>
    <Card cover={<img alt={props.title} src={props.image} />}>
      <Card.Meta title={props.title} description={props.version} />
    </Card>
  </Card.Grid>
);

export default TemplateCard;
