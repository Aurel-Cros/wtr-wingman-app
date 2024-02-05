/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 */
import "./vue/styles/element.scss";
import "./vue/styles/layout.scss";
import "./vue/styles/text.scss";
import "./vue/styles/background.scss";

import "./common/util";

import { createRoot } from "react-dom/client";
import App from "./vue/App";

const domRoot = document.querySelector("#root");
const root = createRoot(domRoot);
root.render(<App />);
