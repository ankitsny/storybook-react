import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { TextArea } from "./TextArea";

const textStories = storiesOf("Storybook TextBox", module);
textStories.addDecorator(withKnobs);

textStories.add(
  "With placeholder",
  () => (
    <TextArea
      value={text("value", "hell")}
      placeholder={text("placeholder", "enter something")}
    ></TextArea>
  ),
  {
    info: {
      text: "INFORMATO",
      source: true
    }
  }
);
