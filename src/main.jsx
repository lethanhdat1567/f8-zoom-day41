import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./components/GlobalStyles/index.jsx";
import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyles>
            <ReduxProvider store={store}>
                <App />
            </ReduxProvider>
        </GlobalStyles>
    </StrictMode>
);
