import React from "react";
import { MemoryRouter } from "react-router-dom";

import "./App.css";
import Root from "./containers/Root";

const App = () => (
  <MemoryRouter>
    <Root />
  </MemoryRouter>
);

export default App;
