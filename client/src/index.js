import React from "react";
import { App } from "./App";
import { createRoot } from 'react-dom/client'

// react v18 changes --concurrent mode
const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />)
