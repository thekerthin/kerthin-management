import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "antd";

import { findTemplates } from "../../store/template/thunks";
import { getAllTemplates } from "../../store/template/selectors";
import ListTemplateCard from "../../components/ListTemplateCard";

const ListTemplates = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const templates = useSelector(getAllTemplates);

  useEffect(() => {
    dispatch(findTemplates());
  }, []);

  const onTemplateClick = useCallback(
    ({ id }) => history.push(`/templates/${id}`),
    []
  );

  return (
    <div>
      <Typography.Title>Templates</Typography.Title>
      <ListTemplateCard templates={templates} onCardClick={onTemplateClick} />
    </div>
  );
};

export default ListTemplates;
