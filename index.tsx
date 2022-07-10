import {Block, Block2} from "./src/core/block";
import React from "react";
import { createRoot } from "react-dom/client";
import { h, render } from "vue";
import ReactHypophys from "./src/apps/react/hypophys";
import VueHypophys from "./src/apps/vue/hypophys";

customElements.define('react-hello', Block);
customElements.define('vue-hello', Block2);

const container = document.getElementById("hroot");

const reactHelloBlock = document.createElement("react-hello");
const helloReact = React.createElement(ReactHypophys);
const root = createRoot(reactHelloBlock!);
root.render(helloReact);

const vueHelloBlock = document.createElement("vue-hello");
const helloVue = h(VueHypophys);
render(helloVue, vueHelloBlock!);

container?.appendChild(reactHelloBlock);
container?.appendChild(vueHelloBlock);