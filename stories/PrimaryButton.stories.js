import { PrimaryButton } from "./PrimaryButton";
import { useEffect } from "@storybook/addons";

export default {
  title: "Sample",
};

export const Sample = () => {
  const div = document.createElement("div");
  div.id = "story";

  useEffect(() => {
    PrimaryButton()(div);

    return () => {
      div.innerHTML = "";
    };
  });

  return div;
};