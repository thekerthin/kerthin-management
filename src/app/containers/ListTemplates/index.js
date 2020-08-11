import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { findTemplates } from "../../store/template/thunks";
import { getAllTemplates } from "../../store/template/selectors";
import ListTemplateCard from "../../components/ListTemplateCard";
import PageLayout from "../../components/PageLayout";

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
    <PageLayout
      content={
        <ListTemplateCard templates={templates} onCardClick={onTemplateClick} />
      }
    />
  );
};

export default ListTemplates;
