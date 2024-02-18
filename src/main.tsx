import ReactDOM from "react-dom/client"; //createRoot doesn't exist in react-dom -> react-dom/client is used
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render( // ! is used to tell typescript that the value is not null
    <App />
);