import React from "react";
import { Button } from "./index";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const buttonStories = storiesOf("Storybook Button", module);
buttonStories.addDecorator(withKnobs);

buttonStories.add(
  "With placeholder",
  () => <Button value={text("value", "hell")}></Button>,
  {
    info: {
      text: "INFORMATO",
      source: true
    }
  }
);
