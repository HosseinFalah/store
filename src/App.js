import { Provider } from "react-redux";
import store from "./redux/store";

import Layout from "./Components/Layout/Layout";
import Router from "./Routers/Router";

const App = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Router/>
            </Layout>
        </Provider>
    )
}

export default App;