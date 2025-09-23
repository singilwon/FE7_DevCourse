import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* store라는 이름은 정해진거라 다른 이름 안됨 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
