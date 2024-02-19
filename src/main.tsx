import ReactDOM from "react-dom/client"; //createRoot doesn't exist in react-dom -> react-dom/client is used
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter is going to control the routing of the application 

ReactDOM.createRoot(document.getElementById("root")!).render( // ! is used to tell typescript that the value is not null
    <BrowserRouter> 
        <App />
    </BrowserRouter>
);