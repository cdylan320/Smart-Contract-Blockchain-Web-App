import "../styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";
import { useState, createContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
