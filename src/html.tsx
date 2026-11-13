import * as React from "react";

const config = require("../gatsby-config.js");

interface HtmlProps {
  body: string;
  htmlAttributes: object;
  bodyAttributes: object;
  preBodyComponents: React.ReactNode;
  postBodyComponents: React.ReactNode;
  headComponents: React.ReactNode;
}

export default (props: HtmlProps) => {
  const { siteMetadata = {} } = config;
  return (
    <html lang="fr" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>{siteMetadata.title}</title>
        {siteMetadata.googleVerification && (
          <meta name="google-site-verification" content={siteMetadata.googleVerification} />
        )}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
