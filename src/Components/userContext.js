import React from "react";
//Step 1: Create Context
const UserContext = React.createContext("M A");
//M A is a default value that we can pass in a context, it is not mandatory, To see this in browser, comment out UserProvider tags in App.js
//Default value won't be displayed if UserProvider tags are used in App.js
//Default value is provided only when there is no matching provider above its component tree
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext; // Used when we use Type 2: Context type method is followed
