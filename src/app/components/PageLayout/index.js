import React from "react";
import { Layout } from "antd";

const PageLayout = (props) => {
  const sider = props.sider ? (
    <Layout.Sider theme="light" width="300">
      {props.sider}
    </Layout.Sider>
  ) : null;

  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Header>{props.header}</Layout.Header>
      <Layout>
        {sider}
        <Layout.Content>{props.content}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
