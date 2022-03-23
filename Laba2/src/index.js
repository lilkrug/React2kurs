import { Clock } from "./components/clock/clock.component.ts.js";
import { JobSelect } from "./components/Menu/JobSelect";
import * as ReactDOM from "react-dom";
import React from "react";
import "../src/components/Menu/Menu.css";
ReactDOM.render(<Clock format="12" timezone="-5:30" />, document.querySelector("#clock"));
ReactDOM.render(<JobSelect />, document.getElementById("menu"));
