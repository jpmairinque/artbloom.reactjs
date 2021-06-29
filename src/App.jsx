import Routes from "./routes";
import { createContext, useState } from "react";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
