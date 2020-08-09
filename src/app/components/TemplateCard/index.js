import React from "react";
import { Card } from "antd";

import { decorator } from "./utils";

const TemplateCard = (props) => (
  <Card.Grid onClick={() => decorator(props)}>
    <Card cover={<img alt={props.Title} src={props.Image} />}>
      <Card.Meta title={props.Title} description={props.Version} />
    </Card>
  </Card.Grid>
);

export default TemplateCard;
