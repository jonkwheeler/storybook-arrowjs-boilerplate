import { html } from "@arrow-js/core";

export const PrimaryButton = ({ text = "Hello World!" } = {}) => {
  return html`<button>${text}</button>`;
};