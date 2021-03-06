import Routes from "./routes";
import GlobalStyle from "./styles/global";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
        <GlobalStyle />
      </AuthContextProvider>
    </>
  );
}

export default App;
