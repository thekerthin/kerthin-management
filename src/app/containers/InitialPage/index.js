import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const InitialPage = () => {
  const history = useHistory();

  return (
    <>
      <Button type="primary" onClick={() => history.push("/template")}>
        Manage Templates
      </Button>
      <br />
      <Button type="primary" onClick={() => history.push("/project")}>
        Manage Projects
      </Button>
    </>
  );
};

export default InitialPage;
