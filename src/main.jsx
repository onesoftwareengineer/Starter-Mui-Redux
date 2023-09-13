import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import store from "@/store/index";
import App from '@/App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { theme } from '@/theme.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
