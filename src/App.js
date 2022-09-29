import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import store from "./redux/store";

import Layout from "./Components/Layout/Layout";
import Router from "./Routers/Router";
import ScrollToTop from "./Utils/ScrollToTop";

const App = () => {
    return (
        <Provider store={store}>
            <ToastContainer theme="light" position="top-center"/>
            <Layout>
                <ScrollToTop/>
                <Router/>
            </Layout>
        </Provider>
    )
}

export default App;