import App from "./App";

import { render } from "preact";
import { TestSection } from "./TestSection";
// render(<App />, document.getElementById("root") || document.body);
render(<TestSection />, document.getElementById("root") || document.body);
