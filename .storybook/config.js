import { configure } from "@storybook/react";

import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
const req2 = require.context("../src/Components", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
