import App from "./App";

import { render } from "preact";
import { TestSection } from "./TestSection";
import { Event } from "./Event";
// render(<App />, document.getElementById("root") || document.body);
// render(<TestSection />, document.getElementById("root") || document.body);
render(<Event />, document.getElementById("root") || document.body);
