export { wrapRootElement } from "./src/wrap-root-element";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "fr" });
};
