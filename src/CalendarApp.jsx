import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { HashRouter } from "react-router-dom";
import { store } from "./store";

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppRouter />
            </HashRouter>
        </Provider>
    );
};
