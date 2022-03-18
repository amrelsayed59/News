import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import { MainProvider } from "./context/gloabal";

ReactDOM.render(
  <MainProvider>
    <Header />
    <App />
  </MainProvider>,
  document.querySelector("#root")
);
