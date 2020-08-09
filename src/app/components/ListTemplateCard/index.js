import React from "react";
import { Card } from "antd";

import TemplateCard from "../TemplateCard";

const ListTemplateCard = (props) => (
  <Card>
    {props.templates.map((template, index) => (
      <TemplateCard
        key={`template_card_${index}`}
        {...template}
        onClick={props.onCardClick}
      />
    ))}
  </Card>
);

export default ListTemplateCard;
