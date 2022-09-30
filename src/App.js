import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import store from "./redux/store";
import { LayoutProvider } from "./hook/Layout";

import Layout from "./Components/Layout/Layout";
import Router from "./Routers/Router";
import ScrollToTop from "./Utils/ScrollToTop";

const App = () => {
    return (
        <Provider store={store}>
            <LayoutProvider>
                <ToastContainer theme="light" position="top-center"/>
                <Layout>
                    <ScrollToTop/>
                    <Router/>
                </Layout>
            </LayoutProvider>
        </Provider>
    )
}

export default App;