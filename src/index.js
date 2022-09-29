import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);