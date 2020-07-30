import React, { useContext } from "react";
import { UserContext, LocationContext } from "../App";

function ComponentF1() {
  const user = useContext(UserContext);
  const location = useContext(LocationContext);
  return (
    <div>
      {user} from {location}
    </div>
  );
}

export default ComponentF1;
