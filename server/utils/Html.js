import React, { PropTypes } from 'react';

function Html({ content, state, scriptHash, vendorHash, cssHash }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Scalable React Boilerplate</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:400,300,700|Lato:400,300,700" rel="stylesheet" type="text/css" />
        <link href={`${cssHash}`} rel="stylesheet" />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script src={`${scriptHash}`} charSet="UTF-8" />
        <script src={`${vendorHash}`} type="text/javascript" />
        <script
          dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
          charSet="UTF-8"
        />
      </body>
    </html>
  );
}

Html.propTypes = {
  scriptHash: PropTypes.string.isRequired,
  cssHash: PropTypes.string.isRequired,
  vendorHash: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Html;
