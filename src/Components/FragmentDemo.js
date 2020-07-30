import React from "react";

function FragmentDemo() {
  return (
    <React.Fragment>
      {/* Used instead of div tag to enclose all child elements, this is a better approach */}
      <h1>Fragment Demo</h1>
      <p>This Describes the fragment demo component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
