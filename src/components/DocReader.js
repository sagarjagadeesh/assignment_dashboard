import React from "react";
import Iframe from "react-iframe";

const DocIframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }
  const src = source;
  return <Iframe url={src} title="file" width="100%" height="100%" />;
};

export default DocIframe;
