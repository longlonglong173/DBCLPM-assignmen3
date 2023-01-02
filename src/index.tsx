// TODO: remove below key - key to prevent source code leaking
import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";

import { getAppTheme } from "styles/theme";

const render = () => {
  // eslint-disable-next-line global-require
  const App = require("./App").default;

  ReactDOM.render(
    <ThemeProvider theme={getAppTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  );
};

render();
