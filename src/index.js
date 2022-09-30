import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PostContextProvider } from "./store/post-context";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600;700&display=swap');
</style>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </PostContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
