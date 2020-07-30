import React from "react";

function Columns() {
  const items = [];
  return (
    <React.Fragment>
      {/* If we use div tage here, it will show error stating td tag cannot be a child of div tag */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {/* Only key attribute can be passed to React.Fragment */}
          <h1>Title</h1>
          <p>{item.tite}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Ashwin</td>
    </React.Fragment>
    /* instead of <React.Fragment> </React.Fragment>, we can write <> </>(empty tags), but here we cannot pass key attribute */
  );
}

export default Columns;
