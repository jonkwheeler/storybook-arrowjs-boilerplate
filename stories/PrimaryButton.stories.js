import { PrimaryButton } from "./PrimaryButton";

export default {
  title: "Sample",
};

const div = document.createElement("div");
div.id = "story";

export const Sample = () => {
  PrimaryButton()(div)

  return div;
};